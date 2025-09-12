// 购物车价格管理器 - 统一管理所有价格显示
class CartPriceManager {
    constructor() {
        this.priceElements = new Map();
        this.originalPrices = new Map();
        this.materialsDiscount = 0;
        this.isInitialized = false;
    }

    // 注册价格元素
    registerPriceElement(key, element, originalPrice = null) {
        this.priceElements.set(key, element);
        if (originalPrice !== null) {
            this.originalPrices.set(key, originalPrice);
        } else if (element) {
            // 尝试从元素获取原始价格
            const priceAttr = element.getAttribute('data-original-price') || 
                            element.getAttribute('data-cart-total-value') ||
                            element.getAttribute('data-price');
            if (priceAttr) {
                this.originalPrices.set(key, parseInt(priceAttr));
            }
        }
    }

    // 更新耗材折扣
    updateMaterialsDiscount(discountAmount) {
        this.materialsDiscount = discountAmount || 0;
        this.updateAllPrices();
    }

    // 更新所有价格显示
    updateAllPrices() {
        this.priceElements.forEach((element, key) => {
            if (!element) return;
            
            const originalPrice = this.originalPrices.get(key);
            if (originalPrice === undefined) return;

            // 对总价相关元素应用耗材折扣
            let finalPrice = originalPrice;
            const isTotalElement = key.includes('total') || key.includes('cart-total') || key.includes('sidebar-cart-total') || key.includes('page-cart-total');
            
            if (isTotalElement && this.materialsDiscount > 0) {
                finalPrice = originalPrice - this.materialsDiscount;
            }
            
            const formattedPrice = this.formatMoneyWithCurrency(finalPrice);
            element.textContent = formattedPrice;
        });
    }

    // 格式化货币显示
    formatMoney(amount) {
        // 格式化金额显示
        if (typeof Shopify !== 'undefined' && Shopify.formatMoney) {
            return Shopify.formatMoney(amount, window.money_format || '{{amount}}');
        }
        return (amount / 100).toFixed(2);
    }

    formatMoneyWithCurrency(amount) {
        // 格式化金额并支持货币转换
        let formattedAmount = this.formatMoney(amount);
        
        // 创建临时的money元素用于货币转换
        const tempElement = document.createElement('span');
        tempElement.className = 'money';
        tempElement.textContent = formattedAmount;
        document.body.appendChild(tempElement);
        
        // 检查是否需要货币转换
        if ((window.show_multiple_currencies && typeof Currency !== 'undefined' && Currency.currentCurrency !== window.shop_currency) || window.show_auto_currency) {
            const currencyCode = document.getElementById('currencies')?.querySelector('.active')?.getAttribute('data-currency');
            if (currencyCode) {
                Currency.convertAll(window.shop_currency, currencyCode, 'span.money', 'money_format');
            }
        }
        
        // 获取转换后的金额
        const convertedAmount = tempElement.textContent;
        document.body.removeChild(tempElement);
        
        return convertedAmount;
    }

    // 初始化价格管理器
    initialize() {
        if (this.isInitialized) return;
        
        // 自动发现并注册价格元素
        this.autoDiscoverPriceElements();
        this.isInitialized = true;
    }

    // 自动发现价格元素
    autoDiscoverPriceElements() {
        // 清空现有元素
        this.priceElements.clear();
        this.originalPrices.clear();

        console.log('=== 开始发现价格元素 ===');

        // 1. 侧边栏购物车总价
        const sidebarCartTotal = document.querySelector('[data-cart-total-value]');
        if (sidebarCartTotal) {
            this.registerPriceElement('sidebar-cart-total', sidebarCartTotal);
            console.log('发现侧边栏购物车总价:', sidebarCartTotal);
        }

        // 2. 页面购物车总价（可能有不同的选择器）
        const pageCartTotalSelectors = [
            '.cart-total-value',
            '.cart__total',
            '.cart-total',
            '[data-cart-total]',
            '.total-price',
            '.cart-summary-total'
        ];

        pageCartTotalSelectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element && this.isPriceElement(element)) {
                this.registerPriceElement('page-cart-total', element);
                console.log('发现页面购物车总价:', element, '选择器:', selector);
            }
        });

        // 3. 小计价格
        const cartSubtotal = document.querySelector('[data-cart-subtotal]');
        if (cartSubtotal) {
            this.registerPriceElement('cart-subtotal', cartSubtotal);
            console.log('发现小计价格:', cartSubtotal);
        }

        // 4. 查找所有可能的总价元素
        const totalSelectors = [
            '[data-cart-total-value]',
            '[data-cart-total]',
            '.cart-total-value',
            '.cart__total',
            '.cart-total',
            '.total-price',
            '.cart-summary-total',
            '.previewCartTotals-value',
            '.cart-subtotal-value',
            '.money[class*="total"]',
            '[class*="total"][class*="price"]'
        ];

        totalSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                // 跳过已经注册的元素
                const key = `total-${selector}-${index}`;
                if (this.priceElements.has(key)) return;
                
                // 检查元素是否包含价格信息且是总价相关
                if (this.isPriceElement(element) && this.isTotalPriceElement(element)) {
                    this.registerPriceElement(key, element);
                    console.log('发现总价元素:', element, '选择器:', selector);
                }
            });
        });

        console.log('=== 价格元素发现完成 ===');
        console.log('总共发现', this.priceElements.size, '个价格元素');
    }

    // 判断元素是否为总价元素
    isTotalPriceElement(element) {
        if (!element) return false;
        
        // 检查元素的类名、ID或属性是否包含总价相关关键词
        const totalKeywords = ['total'];
        const elementText = (element.className + ' ' + (element.id || '') + ' ' + element.getAttribute('data-cart-total-value') || '').toLowerCase();
        
        return totalKeywords.some(keyword => elementText.includes(keyword));
    }

    // 判断元素是否为价格元素
    isPriceElement(element) {
        if (!element || !element.textContent) return false;
        
        // 检查文本内容是否包含价格格式
        const text = element.textContent.trim();
        const pricePattern = /[\$¥€£]\s*\d+[\.,]\d{2}|\d+[\.,]\d{2}\s*[\$¥€£]|\d+[\.,]\d{2}/;
        
        return pricePattern.test(text) || 
               element.hasAttribute('data-price') || 
               element.hasAttribute('data-original-price') ||
               element.hasAttribute('data-cart-total-value') ||
               element.classList.contains('money');
    }

    // 重置所有价格到原始状态
    resetAllPrices() {
        this.materialsDiscount = 0;
        this.updateAllPrices();
    }

    // 手动注册价格元素（供外部调用）
    registerCustomPriceElement(key, element, originalPrice) {
        this.registerPriceElement(key, element, originalPrice);
    }

    // 强制更新总价（专门用于调试和手动更新）
    forceUpdateTotal() {
        console.log('=== 强制更新总价 ===');
        console.log('耗材折扣:', this.materialsDiscount);
        
        // 直接调用立即更新方法，避免重复代码
        this.updateCartTotalsImmediately(this.materialsDiscount);
        
        console.log('=== 强制更新完成 ===');
    }
}

// 全局价格管理器实例
window.cartPriceManager = new CartPriceManager();

class MaterialsDiscountMeter extends HTMLElement {
    constructor() {
        super();
    }

    static get materialsCollectionHandle() {
        return window.materials_discount_settings?.materials_collection_handle || '';
    }
    
    static get discountRules() {
        return MaterialsDiscountMeter.parseDiscountRules(window.materials_discount_settings?.materials_discount_rules || '2:5,3:10,5:15');
    }

    static parseDiscountRules(rulesString) {
        const rules = [];
        const rulePairs = rulesString.split(',');
        
        rulePairs.forEach(pair => {
            const [quantity, percentage] = pair.trim().split(':');
            if (quantity && percentage) {
                rules.push({
                    quantity: parseInt(quantity),
                    percentage: parseInt(percentage)
                });
            }
        });
        
        // 按数量排序，确保从小到大
        return rules.sort((a, b) => a.quantity - b.quantity);
    }

    static getCurrentDiscountRule(materialsCount) {
        // 找到当前数量适用的最高折扣规则
        let applicableRule = null;
        for (const rule of MaterialsDiscountMeter.discountRules) {
            if (materialsCount >= rule.quantity) {
                applicableRule = rule;
            } else {
                break;
            }
        }
        return applicableRule;
    }

    static getNextDiscountRule(materialsCount) {
        // 找到下一个可达到的折扣规则
        for (const rule of MaterialsDiscountMeter.discountRules) {
            if (materialsCount < rule.quantity) {
                return rule;
            }
        }
        return null;
    }

    connectedCallback() {
        this.progressBar = this.querySelector('[data-materials-progress]');
        this.progressMeter = this.querySelector('[data-materials-progress-meter]');

        // 捆绑包信息元素
        this.bundleInfoElement = this.querySelector('[data-materials-bundle-info]');
        this.bundleCountElement = this.querySelector('[data-materials-bundle-count]');
        this.currentPriceElement = this.querySelector('[data-materials-current-price]');
        this.originalPriceElement = this.querySelector('[data-materials-original-price]');

        // 节省信息元素
        this.savingsInfoElement = this.querySelector('[data-materials-savings-info]');
        this.savingsTextElement = this.querySelector('[data-materials-savings-text]');

        // 获取耗材商品ID列表
        this.materialsProductIds = this.getMaterialsProductIds();

        // 初始化时隐藏进度条，等待购物车数据
        if (this.progressBar) {
            this.progressBar.style.display = 'none';
        }

        this.addEventListener('change', this.onCartChange.bind(this));

        
        this.initialize();
    }

    initialize() {
        Shopify.getCart((cart) => {
            this.cart = cart;
            this.calculateMaterialsProgress(cart);
        });
    }

    onCartChange(e) {
        this.initialize();
    }

    calculateMaterialsProgress(cart) {
        // 获取耗材商品
        const materialsItems = this.getMaterialsItems(cart);
        const materialsCount = materialsItems.reduce((total, item) => total + item.quantity, 0);
        const materialsTypes = materialsItems.length; // 耗材种类数量
        
        // 计算耗材总价
        const materialsTotalPrice = materialsItems.reduce((total, item) => total + (item.line_price || 0), 0);
        
        // 计算耗材折扣金额
        const currentRule = MaterialsDiscountMeter.getCurrentDiscountRule(materialsCount);
        let materialsDiscountAmount = 0;
        if (currentRule) {
            materialsDiscountAmount = Math.round(materialsTotalPrice * currentRule.percentage / 100);
        }
        
        // 将耗材折扣信息存储到全局变量中，供Liquid模板使用
        window.materialsDiscountInfo = {
            hasDiscount: materialsDiscountAmount > 0,
            discountAmount: materialsDiscountAmount,
            discountPercentage: currentRule ? currentRule.percentage : 0,
            materialsCount: materialsCount
        };
        
        // 初始化价格管理器
        if (window.cartPriceManager) {
            window.cartPriceManager.initialize();
        }
        
        // 当耗材数量为0时，隐藏整个折扣进度组件
        if (materialsCount === 0) {
            this.hideAllDiscountComponents();
            // 清除全局折扣信息
            window.materialsDiscountInfo = {
                hasDiscount: false,
                discountAmount: 0,
                discountPercentage: 0,
                materialsCount: 0
            };
            // 重置所有价格
            if (window.cartPriceManager) {
                window.cartPriceManager.resetAllPrices();
            }
            return;
        }
        
        // 当耗材数量不为0时，显示所有相关组件
        this.showAllDiscountComponents();
        this.showProgressBar(materialsCount, materialsTypes, materialsTotalPrice);
        this.showBundleInfo(materialsCount, materialsTypes, materialsTotalPrice);
        this.showSavingsInfo(materialsCount, materialsTypes, materialsTotalPrice);
        
        // 更新购物车侧边栏中的耗材折扣显示
        this.updateCartSidebarDiscountDisplay();
        
        // 使用价格管理器更新所有价格
        if (window.cartPriceManager) {
            window.cartPriceManager.updateMaterialsDiscount(materialsDiscountAmount);
        }
        
        // 立即更新总价显示（同步更新，不等待延迟）
        this.updateCartTotalsImmediately(materialsDiscountAmount);
    }

    getMaterialsProductIds() {
        // 从Liquid模板中获取耗材商品ID列表
        const scriptElement = this.querySelector('[data-materials-product-ids]');
        if (scriptElement) {
            try {
                return JSON.parse(scriptElement.textContent);
            } catch (e) {
                console.error('Error parsing materials product IDs:', e);
                return [];
            }
        }
        return [];
    }

    getMaterialsItems(cart) {
        // 获取耗材商品ID列表
        const materialsProductIds = this.materialsProductIds;
        
        // 如果没有配置耗材商品，返回空数组
        if (!materialsProductIds || materialsProductIds.length === 0) {
            return [];
        }
        
        return cart.items.filter(item => {
            // 检查商品ID是否在耗材商品ID列表中
            return materialsProductIds.includes(item.product_id);
        });
    }

    showProgressBar(materialsCount, materialsTypes, materialsTotalPrice) {
        // 显示进度条
        this.progressBar.style.display = 'block';
        
        // 获取当前适用的折扣规则和下一个规则（基于总数量）
        const currentRule = MaterialsDiscountMeter.getCurrentDiscountRule(materialsCount);
        const nextRule = MaterialsDiscountMeter.getNextDiscountRule(materialsCount);
        
        // 获取最大折扣规则（最高数量）
        const maxRule = MaterialsDiscountMeter.discountRules[MaterialsDiscountMeter.discountRules.length - 1];
        
        // 计算进度条进度（始终以最大规则的数量为100%基准）
        let progressPercentage = 0;
        
        if (maxRule) {
            // 进度基于最大规则的数量计算
            progressPercentage = Math.min((materialsCount / maxRule.quantity) * 100, 100);
        }
        
        // 确保进度条有最小显示宽度
        if (materialsCount > 0) {
            progressPercentage = Math.max(progressPercentage, 5); // 至少显示5%
        }
        
        // 设置进度条层级类名
        // this.setProgressTierClass(currentRule, nextRule);
        
        this.setProgressWidthAndText(progressPercentage);
    }

    showBundleInfo(materialsCount, materialsTypes, materialsTotalPrice) {
        // 显示捆绑包信息
        this.bundleInfoElement.style.display = 'block';
        
        // 更新商品数量（显示种类和总数量）
        this.bundleCountElement.textContent = `${materialsCount} Item(s) in bundle`;
        
        // 计算价格信息
        const currentRule = MaterialsDiscountMeter.getCurrentDiscountRule(materialsCount);
        if (currentRule) {
            // 达到折扣条件，显示折扣后的价格
            const discountAmount = Math.round(materialsTotalPrice * currentRule.percentage / 100);
            const finalPrice = materialsTotalPrice - discountAmount;
            
                this.currentPriceElement.textContent = this.formatMoneyWithCurrency(finalPrice);
                this.originalPriceElement.textContent = this.formatMoneyWithCurrency(materialsTotalPrice);
            this.originalPriceElement.style.display = 'block';
        } else {
            // 未达到折扣条件，只显示原价
            this.currentPriceElement.textContent = this.formatMoneyWithCurrency(materialsTotalPrice);
            this.originalPriceElement.style.display = 'none';
        }
    }

    showSavingsInfo(materialsCount, materialsTypes, materialsTotalPrice) {
        // 显示节省信息
        this.savingsInfoElement.style.display = 'block';
        
        const currentRule = MaterialsDiscountMeter.getCurrentDiscountRule(materialsCount);
        const nextRule = MaterialsDiscountMeter.getNextDiscountRule(materialsCount);
        const maxRule = MaterialsDiscountMeter.discountRules[MaterialsDiscountMeter.discountRules.length - 1];
        
        if (currentRule) {
            // 已达到折扣条件，显示当前节省
            const discountAmount = Math.round(materialsTotalPrice * currentRule.percentage / 100);
            if (nextRule) {
                // 还有更高折扣可达到
                const remainingItems = nextRule.quantity - materialsCount;
                this.savingsTextElement.innerHTML = `You're saving ${currentRule.percentage}%! Add ${remainingItems} more item${remainingItems > 1 ? 's' : ''} to upgrade to ${nextRule.percentage}% off!`;
            } else {
                // 已达到最高折扣
                this.savingsTextElement.innerHTML = `You're saving ${currentRule.percentage}%!`;
            }
        } else if (nextRule) {
            // 未达到折扣条件，显示升级提示
            const remainingItems = nextRule.quantity - materialsCount;
            this.savingsTextElement.innerHTML = `Add ${remainingItems} more item${remainingItems > 1 ? 's' : ''} to get ${nextRule.percentage}% off!`;
        } else if (maxRule && materialsCount >= maxRule.quantity) {
            // 如果已经达到或超过最大规则，显示最大折扣
            const discountAmount = Math.round(materialsTotalPrice * maxRule.percentage / 100);
            this.savingsTextElement.innerHTML = `You're saving ${maxRule.percentage}%!`;
        }
    }


    formatMoney(amount) {
        // 格式化金额显示
        if (typeof Shopify !== 'undefined' && Shopify.formatMoney) {
            return Shopify.formatMoney(amount, window.money_format || '{{amount}}');
        }
        return (amount / 100).toFixed(2);
    }

    formatMoneyWithCurrency(amount) {
        // 格式化金额并支持货币转换
        let formattedAmount = this.formatMoney(amount);
        
        // 创建临时的money元素用于货币转换
        const tempElement = document.createElement('span');
        tempElement.className = 'money';
        tempElement.textContent = formattedAmount;
        document.body.appendChild(tempElement);
        
        // 检查是否需要货币转换
        if ((window.show_multiple_currencies && typeof Currency !== 'undefined' && Currency.currentCurrency !== window.shop_currency) || window.show_auto_currency) {
            const currencyCode = document.getElementById('currencies')?.querySelector('.active')?.getAttribute('data-currency');
            if (currencyCode) {
                Currency.convertAll(window.shop_currency, currencyCode, 'span.money', 'money_format');
            }
        }
        
        // 获取转换后的金额
        const convertedAmount = tempElement.textContent;
        document.body.removeChild(tempElement);
        
        return convertedAmount;
    }

    setProgressWidthAndText(progressPercentage) {
        setTimeout(() => {
            this.resetProgressClass();

            // 设置进度条宽度
            if (progressPercentage === 0) {
                // 当进度为0时，进度条完全为空
                this.progressMeter.style.width = '0%';
            } else {
                // 确保进度条有最小显示宽度
                const finalWidth = Math.max(progressPercentage, 2);
                this.progressMeter.style.width = `${Math.min(finalWidth, 100)}%`;
            }
            
        }, 100); // 减少延迟时间
    }

    setProgressTierClass(currentRule, nextRule) {
        // 清除所有层级类名
        this.progressBar.classList.remove('tier-1', 'tier-2', 'tier-3', 'tier-4', 'tier-max');
        
        // 确定当前适用的规则
        const targetRule = nextRule || currentRule;
        
        if (targetRule) {
            // 找到规则在数组中的索引（从1开始）
            const ruleIndex = MaterialsDiscountMeter.discountRules.findIndex(rule => 
                rule.quantity === targetRule.quantity && rule.percentage === targetRule.percentage
            ) + 1;
            
            // 检查是否是最高层规则
            const maxRule = MaterialsDiscountMeter.discountRules[MaterialsDiscountMeter.discountRules.length - 1];
            const isMaxRule = targetRule.quantity === maxRule.quantity && targetRule.percentage === maxRule.percentage;
            
            if (isMaxRule) {
                this.progressBar.classList.add('tier-max');
            } else if (ruleIndex <= 4) {
                this.progressBar.classList.add(`tier-${ruleIndex}`);
            } else {
                // 超过5层的规则使用最高层样式
                this.progressBar.classList.add('tier-max');
            }
        }
    }

    hideAllDiscountComponents() {
        // 隐藏整个折扣进度组件
        this.style.display = 'none';
    }

    showAllDiscountComponents() {
        // 显示整个折扣进度组件
        this.style.display = 'block';
    }

    resetProgressClass() {
        this.progressBar.classList.remove('materials-achieved');
        this.progressBar.classList.remove('materials-start');
        this.progressBar.classList.remove('materials-empty');
    }

    updateCartSidebarDiscountDisplay() {
        // 查找购物车侧边栏中的耗材折扣显示元素
        const materialsDiscountDisplay = document.querySelector('[data-materials-discount-display]');
        const materialsDiscountPercentage = document.querySelector('[data-materials-discount-percentage]');
        const materialsDiscountValue = document.querySelector('[data-materials-discount-value]');
        
        if (!materialsDiscountDisplay || !materialsDiscountPercentage || !materialsDiscountValue) {
            return;
        }
        
        // 获取全局折扣信息
        const discountInfo = window.materialsDiscountInfo;
        
        if (discountInfo && discountInfo.hasDiscount && discountInfo.discountAmount > 0) {
            // 显示耗材折扣
            materialsDiscountDisplay.style.display = 'block';
            
            // 更新折扣百分比显示
            materialsDiscountPercentage.textContent = `${discountInfo.discountPercentage}% off `;
            
            // 更新折扣金额显示
            const formattedAmount = this.formatMoneyWithCurrency(discountInfo.discountAmount);
            materialsDiscountValue.textContent = `(-${formattedAmount})`;
        } else {
            // 隐藏耗材折扣
            materialsDiscountDisplay.style.display = 'none';
        }
    }

    // 更新购物车总价（立即更新，无延迟）
    updateCartTotalsImmediately(discountAmount) {
        const sidebarCartTotal = document.querySelector('[data-cart-total-value]');
        if (sidebarCartTotal) {
            const originalTotal = parseInt(sidebarCartTotal.getAttribute('data-cart-total-value')) || 0;
            const finalTotal = discountAmount > 0 ? originalTotal - discountAmount : originalTotal;
            const formattedTotal = this.formatMoneyWithCurrency(finalTotal);
            sidebarCartTotal.textContent = formattedTotal;
        }
    }
}

window.addEventListener('load', () => {
    customElements.define('materials-discount-component', MaterialsDiscountMeter);
});

function initializeDiscountComponents() {
    const discountComponents = document.querySelectorAll('materials-discount-component');
    discountComponents.forEach(component => {
        if (component.initialize) {
            component.initialize();
        }
    });
}

// 购物车更新事件（从theme.js触发）
document.addEventListener('cart-update', initializeDiscountComponents);

// 购物车侧边栏显示时重新初始化
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (document.body.classList.contains('cart-sidebar-show')) {
                    initializeDiscountComponents();
                }
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
});
