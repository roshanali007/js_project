document.addEventListener('DOMContentLoaded', ()=>{
        const products=[
        {
            id:1,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/09/Product-image-removebg-preview-300x200.png',
            name:'Arion Frost Barebone',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00',
            connectivity:'wired',
            size:100
        },
        {
            id:2,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/Keychrone-04-300x200.png',
            name:'Royal Kludge R75-WIRELESS',
            rate:'★★★★☆',
            dis_price:'₹9,000.00',
            price:'₹5,499.00',
            connectivity:'wireless',
            size:60
        },
        {
            id:3,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/06/1000105380-300x200.webp',
            name:'Keychron V5 Max Wireless',
            rate:'★★★★★',
            dis_price:'₹16,000.00',
            price:'₹9,500.00',
            connectivity:'wireless',
            size:65
        },
        {
            id:4,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/2-930x620.jpg',
            name:'Arion Frost x Keychron K8 Pro',
            rate:'★★★★★',
            dis_price:'₹15,000.00',
            price:'₹7,999.00',
            connectivity:'wired',
            size:75
        },
        {
            id:5,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/Keychrone-04-300x200.png',
            name:'EPOMAKER x AULA F75',
            rate:'★★★★★',
            dis_price:'₹7,500.00',
            price:'₹5,999.00',
            connectivity:'wired',
            size:80
        },
        {
            id:6,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/Epomaker-X-Galaxy-100-Grey-07-Copy-300x200.webp',
            name:'EPOMAKER X GALAXY 100',
            rate:'★★★☆☆',
            dis_price:'₹17,000.00',
            price:'₹4,999.00',
            connectivity:'wired',
            size:100
        },
        {
            id:7,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/01/Rk65-Wireless-A-930x620.png',
            name:'Royal Kludge R65-WIRELESS',
            rate:'★★★☆☆',
            dis_price:'₹10,000.00',
            price:'₹2,999.00',
            connectivity:'wireless',
            size:60
        },
        {
            id:8,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/EPOMAKER-X-AULA-F75-Max-Black-side-printed-02-300x200.webp',
            name:'EPOMAKER x AULA F75',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00',
            connectivity:'wired',
            size:65
        },
        {
            id:9,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/07/RK-R75-Skycyan-1-930x620.webp',
            name:'EPOMAKER x AULA F75 MAX',
            rate:'★★★★★',
            dis_price:'₹10,500.00',
            price:'₹6,999.00',
            connectivity:'wired',
            size:75
        },
        {
            id:10,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/EPOMAKER-x-AULA-F99-PRO-Black-Side-Printed-01-300x200.webp',
            name:'Royal Kludge RK R75',
            rate:'★★★★★',
            dis_price:'₹7,000.00',
            price:'₹4,699.00',
            connectivity:'wired',
            size:80
        },
        {
            id:11,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/11/Aula-f87-pro-white-green-7-1024x683.jpg',
            name:'EPOMAKER x AULA F99 Pro',
            rate:'★★☆☆☆',
            dis_price:'₹15,000.00',
            price:'₹7,900.00',
            connectivity:'wired',
            size:100
        },
        {
            id:12,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/06/Aula-F75-MAX-Black-Side-Printed-00_-300x200.webp',
            name:'Aula F87 Pro Wireless',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00',
            connectivity:'wireless',
            size:60
        },
        {
            id:13,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/07/RKR65-Phantom-1-300x200.webp',
            name:'Aula F75 MAX',
            rate:'★★★★☆',
            dis_price:'₹12,500.00',
            price:'₹7,500.00',
            connectivity:'wired',
            size:65
        },
        {
            id:14,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/Ajazz-AK820-Pro-Grey-Gift-Switch-01-300x200.webp',
            name:'Roayl Kludge RK R65',
            rate:'★★★★★',
            dis_price:'₹6,500.00',
            price:'₹4,399.00',
            connectivity:'wired',
            size:75
        },
        {
            id:15,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2022/12/Ducky-One-3-SF-Pure-White-RGB-6-930x620.webp',
            name:'EPOMAKER X AJAZZ AK820 Pro',
            rate:'★★★★★',
            dis_price:'₹7,500.00',
            price:'₹5,999.00',
            connectivity:'wired',
            size:80
        },
        {
            id:16,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2020/11/GK61-black-1-min-300x200.webp',
            name:'Ducky one 3 SF Pure White RGB',
            rate:'★☆☆☆☆',
            dis_price:'₹12,199.00',
            price:'₹6,099.00',
            connectivity:'wired',
            size:100
        },
        {
            id:17,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/09/Aula-f99-grey-black-white-1-930x620.jpg',
            name:'SK61 - RGB(Gateron Optical Switches)',
            rate:'★★★★★',
            dis_price:'₹10,000.00',
            price:'₹4,799.00',
            connectivity:'wired',
            size:60
        },
        {
            id:18,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/08/GK-64-TRANSLUCENT-300x200.webp',
            name:'Aula F99 Wireless',
            rate:'★☆☆☆☆',
            dis_price:'₹10,000.00',
            price:'₹7,500.00',
            connectivity:'wireless',
            size:65
        },
        {
            id:19,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/08/RK-M87-RD-9-930x620.webp',
            name:'Skyloong GK61 - V2',
            rate:'★★☆☆☆',
            dis_price:'₹7,000.00',
            price:'₹4,999.00',
            connectivity:'wired',
            size:75
        },
        {
            id:20,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/01/10-930x620.webp',
            name:'Royal Kludge RK M87',
            rate:'★☆☆☆☆',
            dis_price:'₹11,000.00',
            price:'₹8,999.00',
            connectivity:'wired',
            size:80
        },
    ]

    const product_container=document.querySelector('.meckey_products')

    products.map((product)=>{
        const productLi=document.createElement('li')
        productLi.classList.add('meckey_product_list')
        productLi.innerHTML=`
        <div class="meckey_product_div">
            <div class="meckey_product_img">
                <img src="${product.src}" alt="" class="product_img">
                <div class="meckey_product_like">
                <div class="meckey_like_div">
                    <img src="img/white _like.svg" alt="" class="meckey_like_logo">
                </div>
            </div>           
            </div>
            <div class="meckey_product_details">
                <h2 class="product_name_text">${product.name}</h2>
                <div class="product_rating">${product.rate}</div>
                <span class="product_prices">
                    <span class="product_orginal">${product.dis_price}</span>
                    <span class="product_discount">${product.price}</span>
                </span>
            </div>
            
        </div>
        
        `
        product_container.appendChild(productLi)
    })
               
    const filterClearBtn = document.querySelector('.filter_page_clear');
    filterClearBtn.style.display = 'none';

    let defaultPrice = { min: 0, max: 10000 };
    let defaultStock = "Any";

    function checkAnyActiveFilter() {
    const anyCheckboxActive = document.querySelectorAll('#filterPage .brand_checkbox.active').length > 0;
    const stockActive = document.querySelector('#filterPage .stock_radio.active');
    const leftThumb = document.querySelector('#filterPage .price_left_thumb');
    const rightThumb = document.querySelector('#filterPage .price_right_thumb');

    const priceChanged =
        parseInt(leftThumb.value) !== defaultPrice.min ||
        parseInt(rightThumb.value) !== defaultPrice.max;

    const stockChanged = stockActive && stockActive.nextElementSibling.textContent !== defaultStock;

    filterClearBtn.style.display =
        anyCheckboxActive || priceChanged || stockChanged ? 'block' : 'none';
    }

    const allFilterCheckboxes = document.querySelectorAll(
    '#filterPage .brand_checkbox'
    );

    allFilterCheckboxes.forEach((box) => {
    box.addEventListener('click', () => {
        setTimeout(checkAnyActiveFilter, 100); 
    });
    });


    const filterLeft = document.querySelector('#filterPage .price_left_thumb');
    const filterRight = document.querySelector('#filterPage .price_right_thumb');

    filterLeft.addEventListener('input', checkAnyActiveFilter);
    filterRight.addEventListener('input', checkAnyActiveFilter);

    document.querySelectorAll('#filterPage .stock_li').forEach((item) => {
    item.addEventListener('click', () => {
        setTimeout(checkAnyActiveFilter, 100);
    });
    });

    filterClearBtn.addEventListener('click', () => {

    document.querySelectorAll('#filterPage .brand_checkbox').forEach((checkbox) => {
        const logo = checkbox.querySelector('.checkbox_logo');
        logo.style.display = 'none';
        checkbox.style.background = '#fff';
        checkbox.classList.remove('active');
    });

    filterLeft.value = defaultPrice.min;
    filterRight.value = defaultPrice.max;
    const updateRangeEvent = new Event('input');
    filterLeft.dispatchEvent(updateRangeEvent);
    filterRight.dispatchEvent(updateRangeEvent);

    document.querySelectorAll('#filterPage .stock_radio').forEach((radio) => {
        radio.classList.remove('active');
    });
    const firstStock = document.querySelector('#filterPage .stock_li:first-child .stock_radio');
    firstStock.classList.add('active');

    filterClearBtn.style.display = 'none';
    });


    function setupPriceRange(pageSelector) {
    const page = document.querySelector(pageSelector);
    const leftThumb = page.querySelector('.price_left_thumb');
    const rightThumb = page.querySelector('.price_right_thumb');
    const rangeLine = page.querySelector('.price_outside_line');
    const minOutput = page.querySelector('.price_min');
    const maxOutput = page.querySelector('.price_max');
    const blocks = page.querySelectorAll('.price_each_block');
    const clearBtn = page.querySelector('.price_page_clear, .filter_page_clear');


    const minGap = 100;
    const sliderMax = parseInt(leftThumb.max);
    const defaultLeft = parseInt(leftThumb.value);
    const defaultRight = parseInt(rightThumb.value);

    clearBtn.style.display = 'none';

    function updateRange(e) {
        let leftVal = parseInt(leftThumb.value);
        let rightVal = parseInt(rightThumb.value);

        if (rightVal - leftVal < minGap) {
        if (e && e.target === leftThumb)
            leftVal = rightVal - minGap;
        else if (e && e.target === rightThumb)
            rightVal = leftVal + minGap;
        }

        const leftPercent = (leftVal / sliderMax) * 100;
        const rightPercent = (rightVal / sliderMax) * 100;

        rangeLine.style.left = `${leftPercent}%`;
        rangeLine.style.width = `${rightPercent - leftPercent}%`;

        minOutput.textContent = leftVal === 0 ? 'min' : `₹${leftVal.toLocaleString()}`;
        maxOutput.textContent = rightVal === sliderMax ? 'max' : `₹${rightVal.toLocaleString()}`;

        blocks.forEach((block, index) => {
        const blockValue = (sliderMax / blocks.length) * index;
        block.style.opacity = blockValue >= leftVal && blockValue <= rightVal ? 0.5 : 0.2;
        });

        clearBtn.style.display =
        leftVal !== defaultLeft || rightVal !== defaultRight ? 'block' : 'none';
    }

    leftThumb.addEventListener('input', updateRange);
    rightThumb.addEventListener('input', updateRange);

    clearBtn.addEventListener('click', () => {
        leftThumb.value = defaultLeft;
        rightThumb.value = defaultRight;
        updateRange();
        clearBtn.style.display = 'none';
    });

    updateRange();
    }


    const clearBtn = document.querySelector('.brand_page_clear');
clearBtn.style.display = 'none';

const brandnames = [
  { id: 1, name: 'Arion' },
  { id: 2, name: 'ATK' },
  { id: 3, name: 'ATTACK SHARK' },
  { id: 4, name: 'Aula' },
  { id: 5, name: 'Ducky' },
  { id: 6, name: 'Epomaker' },
  { id: 7, name: 'Hello Ganss' }
];

const size = [
  { id: 1, name: '100%' },
  { id: 2, name: '60%' },
  { id: 3, name: '65%' },
  { id: 4, name: '75%' },
  { id: 5, name: '80%' }
];

const connect =[
    {id:1, name:'wired'},
    {id:2, name:'wireless'}
]
const key = [
    { id: 1, name: 'Ajazz Flying Fish' },
    { id: 2, name: 'Ajazz Gift' },
    { id: 3, name: 'Arctic Fox' },
    { id: 4, name: 'azure' },
    { id: 5, name: 'Beige Switch' },
    { id: 6, name: 'Cabbage Tofu V2' },
    { id: 7, name: 'Cherry MX Blue' },
];
const keycaps = [
    { id: 1, name: 'ABS' },
    { id: 2, name: 'Double-shot ABS' },
    { id: 3, name: 'Dye-sub PBT' },
    { id: 4, name: 'Grey & Black Keycaps' },
    { id: 5, name: 'Not Included' },
    { id: 6, name: 'OSA' },
    { id: 7, name: 'OSA PBT' },
];

function renderFilterList(containerSelector, dataArray) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = ''; 

  dataArray.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('brand_content_li');
    li.innerHTML = `
      <div class="brand_checkbox">
        <img src="img/checkbox.svg" alt="" class="checkbox_logo">
      </div>
      <div class="brand_name_text">${item.name}</div>
    `;
    container.appendChild(li);
  });

  const moreDiv = document.createElement('div');
  moreDiv.classList.add('brand_more_text');
  moreDiv.innerText = `more (5)`;
  container.appendChild(moreDiv);
}

renderFilterList('#brandPage .brand_content_ul', brandnames);
renderFilterList('#filterPage .brand_content_ul', brandnames);
renderFilterList('#filterPage .size_content_ul', size);
renderFilterList('#filterPage .connect_content_ul',connect)
renderFilterList('#filterPage .key_content_ul',key)
renderFilterList('#filterPage .keycaps_content_ul',keycaps)

function setupCheckboxes() {
  const checkboxes = document.querySelectorAll('.brand_checkbox');

  checkboxes.forEach((checkbox) => {
    const checkbox_logo = checkbox.querySelector('.checkbox_logo');
    let ischecked = false;

    checkbox.addEventListener('click', () => {
      ischecked = !ischecked;
      if (ischecked) {
        checkbox_logo.style.display = 'block';
        checkbox.style.background = '#000000';
        checkbox.classList.add('active');
      } else {
        checkbox_logo.style.display = 'none';
        checkbox.style.background = '#fff';
        checkbox.classList.remove('active');
      }

      const anyActive = document.querySelectorAll('.brand_checkbox.active').length > 0;
      clearBtn.style.display = anyActive ? 'block' : 'none';
    });
  });
}

clearBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.brand_checkbox');
  checkboxes.forEach((checkbox) => {
    const checkbox_logo = checkbox.querySelector('.checkbox_logo');
    checkbox_logo.style.display = 'none';
    checkbox.style.background = '#ffffff';
    checkbox.classList.remove('active');
  });
  clearBtn.style.display = 'none';
});


setupCheckboxes();

    document.querySelectorAll('#filterPage .brand_checkbox').forEach((box) => {
    box.addEventListener('click', () => {
        setTimeout(checkAnyActiveFilter, 50);
    });
    });


    const mainPage = document.getElementById('mainPage');
    const pricePage = document.getElementById('pricePage');
    const brandPage = document.getElementById('brandPage');
    const filterPage = document.getElementById('filterPage');

    const priceFilter = document.getElementById('priceFilter');
    const brands = document.getElementById('priceBrand');
    const filterBtn = document.getElementById('filterBtn');
    const backBtn = document.getElementById('backBtn');
    const backBtnBrand = document.getElementById('backBtnbrand');
    const backBtnFilter = document.getElementById('backBtnfilter');
    const header=document.querySelector('.meckey_header')

    priceFilter.addEventListener('click', () => {
    mainPage.style.display = 'none';
    pricePage.style.display = 'flex';
    header.style.display='none'
    });
    backBtn.addEventListener('click', () => {
    pricePage.style.display = 'none';
    mainPage.style.display = 'block';
    header.style.display='block'
    });

    brands.addEventListener('click', () => {
    mainPage.style.display = 'none';
    brandPage.style.display = 'flex';
    header.style.display='none'
    });
    backBtnBrand.addEventListener('click', () => {
    mainPage.style.display = 'block';
    brandPage.style.display = 'none';
    header.style.display='block'
    });

    filterBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    filterPage.style.display = 'flex';
    header.style.display='none'
    });
    backBtnFilter.addEventListener('click', () => {
    mainPage.style.display = 'block';
    filterPage.style.display = 'none';
    header.style.display='block'
    });


    setupPriceRange('#pricePage');
    setupPriceRange('#filterPage');

   const stockItems = document.querySelectorAll('.stock_li');

    if (stockItems.length > 0) {
    const firstRadio = stockItems[0].querySelector('.stock_radio');
    if (firstRadio) firstRadio.classList.add('active');
    }

    stockItems.forEach((item) => {
    item.addEventListener('click', () => {
        stockItems.forEach((el) => {
        el.querySelector('.stock_radio').classList.remove('active');
        });

        const radio = item.querySelector('.stock_radio');
        radio.classList.add('active');
    });
    });
                
    const filterState = {
        minPrice: 0,
        maxPrice: 10000,
        selectedBrands: [],
        selectedSizes: [],
        selectedConnectivity: []
    };

    let isSyncing = false;

    function renderProducts(productsToRender) {
        product_container.innerHTML = ''; 
        
        productsToRender.forEach((product) => {
            const productLi = document.createElement('li');
            productLi.classList.add('meckey_product_list');
            productLi.innerHTML = `
            <div class="meckey_product_div">
                <div class="meckey_product_img">
                    <img src="${product.src}" alt="" class="product_img">
                    <div class="meckey_product_like">
                    <div class="meckey_like_div">
                        <img src="img/white _like.svg" alt="" class="meckey_like_logo">
                    </div>
                </div>           
                </div>
                <div class="meckey_product_details">
                    <h2 class="product_name_text">${product.name}</h2>
                    <div class="product_rating">${product.rate}</div>
                    <span class="product_prices">
                        <span class="product_orginal">${product.dis_price}</span>
                        <span class="product_discount">${product.price}</span>
                    </span>
                </div>
            </div>
            `;
            product_container.appendChild(productLi);
        });
        
        const showingResult = document.querySelector('.meckey_showing_result');
        showingResult.textContent = `Showing 1–${productsToRender.length} of ${productsToRender.length} results`;
    }

    function priceToNumber(priceString) {
        return parseInt(priceString.replace('₹', '').replace(/,/g, '').replace('.00', ''));
    }

    function getSelectedBrands(pageSelector) {
        const page = document.querySelector(pageSelector);
        const activeCheckboxes = page.querySelectorAll('.brand_content_ul .brand_checkbox.active');
        const selectedBrands = [];
        
        activeCheckboxes.forEach((checkbox) => {
            const brandName = checkbox.nextElementSibling.textContent;
            selectedBrands.push(brandName.toLowerCase());
        });
        
        return selectedBrands;
    }

    function getSelectedSizes(pageSelector) {
        const page = document.querySelector(pageSelector);
        const activeCheckboxes = page.querySelectorAll('.size_content_ul .brand_checkbox.active');
        const selectedSizes = [];
        
        activeCheckboxes.forEach((checkbox) => {
            const sizeName = checkbox.nextElementSibling.textContent;
            const sizeValue = parseInt(sizeName.replace('%', ''));
            selectedSizes.push(sizeValue);
        });
        
        return selectedSizes;
    }

    function getSelectedConnectivity(pageSelector) {
        const page = document.querySelector(pageSelector);
        const activeCheckboxes = page.querySelectorAll('.connect_content_ul .brand_checkbox.active');
        const selectedConnectivity = [];
        
        activeCheckboxes.forEach((checkbox) => {
            const connectName = checkbox.nextElementSibling.textContent;
            selectedConnectivity.push(connectName.toLowerCase());
        });
        
        return selectedConnectivity;
    }

    function filterProductsWithState() {
        return products.filter((product) => {

            const productPrice = priceToNumber(product.price);
            const priceMatch = productPrice >= filterState.minPrice && productPrice <= filterState.maxPrice;
            
            let brandMatch = true;
            if (filterState.selectedBrands.length > 0) {
                const productName = product.name.toLowerCase();
                brandMatch = filterState.selectedBrands.some(brand => productName.includes(brand));
            }
            
            let sizeMatch = true;
            if (filterState.selectedSizes.length > 0) {
                sizeMatch = filterState.selectedSizes.includes(product.size);
            }
            
            let connectivityMatch = true;
            if (filterState.selectedConnectivity.length > 0) {
                connectivityMatch = filterState.selectedConnectivity.includes(product.connectivity.toLowerCase());
            }
            
            return priceMatch && brandMatch && sizeMatch && connectivityMatch;
        });
    }

    function applyGlobalFilters() {
        const filteredProducts = filterProductsWithState();
        renderProducts(filteredProducts);
    }

    function updateRangeVisuals(pageSelector) {
        const page = document.querySelector(pageSelector);
        const leftThumb = page.querySelector('.price_left_thumb');
        const rightThumb = page.querySelector('.price_right_thumb');
        const rangeLine = page.querySelector('.price_outside_line');
        const minOutput = page.querySelector('.price_min');
        const maxOutput = page.querySelector('.price_max');
        const blocks = page.querySelectorAll('.price_each_block');
        
        const sliderMax = parseInt(leftThumb.max);
        const leftVal = parseInt(leftThumb.value);
        const rightVal = parseInt(rightThumb.value);
        
        const leftPercent = (leftVal / sliderMax) * 100;
        const rightPercent = (rightVal / sliderMax) * 100;
        
        rangeLine.style.left = `${leftPercent}%`;
        rangeLine.style.width = `${rightPercent - leftPercent}%`;
        
        minOutput.textContent = leftVal === 0 ? 'min' : `₹${leftVal.toLocaleString()}`;
        maxOutput.textContent = rightVal === sliderMax ? 'max' : `₹${rightVal.toLocaleString()}`;
        
        blocks.forEach((block, index) => {
            const blockValue = (sliderMax / blocks.length) * index;
            block.style.opacity = blockValue >= leftVal && blockValue <= rightVal ? 0.5 : 0.2;
        });
    }

    function updatePriceClearButton(pageSelector) {
        const page = document.querySelector(pageSelector);
        const clearBtn = page.querySelector('.price_page_clear');
        
        if (clearBtn) {
            const isPriceChanged = filterState.minPrice !== 0 || filterState.maxPrice !== 10000;
            clearBtn.style.display = isPriceChanged ? 'block' : 'none';
        }
    }

    function updateBrandClearButton() {
        const clearBtn = document.querySelector('.brand_page_clear');
        
        if (clearBtn) {
            const hasBrandsSelected = filterState.selectedBrands.length > 0;
            clearBtn.style.display = hasBrandsSelected ? 'block' : 'none';
        }
    }

    function updateFilterPageClearButton() {
        const filterClearBtn = document.querySelector('.filter_page_clear');
        
        if (filterClearBtn) {
            const isPriceChanged = filterState.minPrice !== 0 || filterState.maxPrice !== 10000;
            const hasBrandsSelected = filterState.selectedBrands.length > 0;
            const hasSizesSelected = filterState.selectedSizes.length > 0;
            const hasConnectivitySelected = filterState.selectedConnectivity.length > 0;
            
            const anyFilterActive = isPriceChanged || hasBrandsSelected || hasSizesSelected || hasConnectivitySelected;
            
            filterClearBtn.style.display = anyFilterActive ? 'block' : 'none';
        }
    }

    function syncPriceSlidersVisually(sourcePageSelector, targetPageSelector) {
        if (isSyncing) return; 
        
        const sourcePage = document.querySelector(sourcePageSelector);
        const targetPage = document.querySelector(targetPageSelector);
        
        if (!sourcePage || !targetPage) return;
        
        const sourceLeft = sourcePage.querySelector('.price_left_thumb');
        const sourceRight = sourcePage.querySelector('.price_right_thumb');
        const targetLeft = targetPage.querySelector('.price_left_thumb');
        const targetRight = targetPage.querySelector('.price_right_thumb');
        
        if (targetLeft && targetRight && sourceLeft && sourceRight) {
            isSyncing = true;
            
            targetLeft.value = sourceLeft.value;
            targetRight.value = sourceRight.value;
            updateRangeVisuals(targetPageSelector);
            updatePriceClearButton(targetPageSelector);
            isSyncing = false;
        }
    }

    function updatePriceFilter(minPrice, maxPrice, sourcePageSelector) {
        if (isSyncing) return; 
        
        filterState.minPrice = minPrice;
        filterState.maxPrice = maxPrice;
        updatePriceClearButton(sourcePageSelector);
        updateFilterPageClearButton();
        if (sourcePageSelector === '#pricePage') {
            syncPriceSlidersVisually('#pricePage', '#filterPage');
        } else if (sourcePageSelector === '#filterPage') {
            syncPriceSlidersVisually('#filterPage', '#pricePage');
        }
        
        applyGlobalFilters();
    }

    function updateBrandFilter(pageSelector) {
        filterState.selectedBrands = getSelectedBrands(pageSelector);
        updateBrandClearButton();
    
        updateFilterPageClearButton();
        
        applyGlobalFilters();
    }

    function updateSizeFilter(pageSelector) {
        filterState.selectedSizes = getSelectedSizes(pageSelector);
        
        updateFilterPageClearButton();
        
        applyGlobalFilters();
    }

    function updateConnectivityFilter(pageSelector) {
        filterState.selectedConnectivity = getSelectedConnectivity(pageSelector);
        
        updateFilterPageClearButton();
        
        applyGlobalFilters();
    }

    function syncCheckboxesAcrossPages(sourcePageSelector, targetPageSelector, ulClass) {
        const sourcePage = document.querySelector(sourcePageSelector);
        const targetPage = document.querySelector(targetPageSelector);
        
        if (!sourcePage || !targetPage) return;
        
        const sourceCheckboxes = sourcePage.querySelectorAll(`${ulClass} .brand_content_li`);
        const targetCheckboxes = targetPage.querySelectorAll(`${ulClass} .brand_content_li`);
        
        sourceCheckboxes.forEach((sourceLi, index) => {
            const sourceCheckbox = sourceLi.querySelector('.brand_checkbox');
            const targetCheckbox = targetCheckboxes[index]?.querySelector('.brand_checkbox');
            
            if (targetCheckbox) {
                const sourceLogo = sourceCheckbox.querySelector('.checkbox_logo');
                const targetLogo = targetCheckbox.querySelector('.checkbox_logo');
                
                if (sourceCheckbox.classList.contains('active')) {
                    targetCheckbox.classList.add('active');
                    targetCheckbox.style.background = '#000000';
                    targetLogo.style.display = 'block';
                } else {
                    targetCheckbox.classList.remove('active');
                    targetCheckbox.style.background = '#fff';
                    targetLogo.style.display = 'none';
                }
            }
        });
        
        updateBrandClearButton();
        updateFilterPageClearButton();
    }

    function setupPricePageFiltering() {
        const pageSelector = '#pricePage';
        const page = document.querySelector(pageSelector);
        const leftThumb = page.querySelector('.price_left_thumb');
        const rightThumb = page.querySelector('.price_right_thumb');
        
        leftThumb.addEventListener('input', () => {
            if (isSyncing) return;
            const minPrice = parseInt(leftThumb.value);
            const maxPrice = parseInt(rightThumb.value);
            updatePriceFilter(minPrice, maxPrice, pageSelector);
        });
        
        rightThumb.addEventListener('input', () => {
            if (isSyncing) return;
            const minPrice = parseInt(leftThumb.value);
            const maxPrice = parseInt(rightThumb.value);
            updatePriceFilter(minPrice, maxPrice, pageSelector);
        });
    }

    function setupFilterPageFiltering() {
        const pageSelector = '#filterPage';
        const page = document.querySelector(pageSelector);
        const leftThumb = page.querySelector('.price_left_thumb');
        const rightThumb = page.querySelector('.price_right_thumb');
        
        leftThumb.addEventListener('input', () => {
            if (isSyncing) return;
            const minPrice = parseInt(leftThumb.value);
            const maxPrice = parseInt(rightThumb.value);
            updatePriceFilter(minPrice, maxPrice, pageSelector);
        });
        
        rightThumb.addEventListener('input', () => {
            if (isSyncing) return;
            const minPrice = parseInt(leftThumb.value);
            const maxPrice = parseInt(rightThumb.value);
            updatePriceFilter(minPrice, maxPrice, pageSelector);
        });
        
        setTimeout(() => {
            const brandCheckboxes = page.querySelectorAll('.brand_content_ul .brand_checkbox');
            brandCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener('click', () => {
                    setTimeout(() => {
                        updateBrandFilter(pageSelector);
                        syncCheckboxesAcrossPages('#filterPage', '#brandPage', '.brand_content_ul');
                    }, 50);
                });
            });
            
            const sizeCheckboxes = page.querySelectorAll('.size_content_ul .brand_checkbox');
            sizeCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener('click', () => {
                    setTimeout(() => updateSizeFilter(pageSelector), 50);
                });
            });
            
            const connectCheckboxes = page.querySelectorAll('.connect_content_ul .brand_checkbox');
            connectCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener('click', () => {
                    setTimeout(() => updateConnectivityFilter(pageSelector), 50);
                });
            });
        }, 100);
    }

    function setupBrandPageFiltering() {
        const pageSelector = '#brandPage';
        
        setTimeout(() => {
            const brandCheckboxes = document.querySelectorAll('#brandPage .brand_checkbox');
            brandCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener('click', () => {
                    setTimeout(() => {
                        updateBrandFilter(pageSelector);
                        syncCheckboxesAcrossPages('#brandPage', '#filterPage', '.brand_content_ul');
                    }, 50);
                });
            });
        }, 100);
    }

    setupPricePageFiltering();
    setupFilterPageFiltering();
    setupBrandPageFiltering();

    document.querySelector('#pricePage .price_page_clear').addEventListener('click', () => {
        isSyncing = true;
        
        filterState.minPrice = 0;
        filterState.maxPrice = 10000;
        
        const pricePageLeft = document.querySelector('#pricePage .price_left_thumb');
        const pricePageRight = document.querySelector('#pricePage .price_right_thumb');
        const filterPageLeft = document.querySelector('#filterPage .price_left_thumb');
        const filterPageRight = document.querySelector('#filterPage .price_right_thumb');
        
        pricePageLeft.value = 0;
        pricePageRight.value = 10000;
        filterPageLeft.value = 0;
        filterPageRight.value = 10000;
        
        updateRangeVisuals('#pricePage');
        updateRangeVisuals('#filterPage');
        
        updatePriceClearButton('#pricePage');
        updatePriceClearButton('#filterPage');
        updateFilterPageClearButton();
        
        isSyncing = false;
        
        applyGlobalFilters();
    });

    document.querySelector('#brandPage .brand_page_clear').addEventListener('click', () => {
        filterState.selectedBrands = [];
        
        document.querySelectorAll('#brandPage .brand_content_ul .brand_checkbox').forEach((checkbox) => {
            const logo = checkbox.querySelector('.checkbox_logo');
            logo.style.display = 'none';
            checkbox.style.background = '#fff';
            checkbox.classList.remove('active');
        });
        
        document.querySelectorAll('#filterPage .brand_content_ul .brand_checkbox').forEach((checkbox) => {
            const logo = checkbox.querySelector('.checkbox_logo');
            logo.style.display = 'none';
            checkbox.style.background = '#fff';
            checkbox.classList.remove('active');
        });
        
        updateBrandClearButton();
        updateFilterPageClearButton();
        
        applyGlobalFilters();
    });

    document.querySelector('.filter_page_clear').addEventListener('click', () => {
        isSyncing = true;
        
        filterState.minPrice = 0;
        filterState.maxPrice = 10000;
        filterState.selectedBrands = [];
        filterState.selectedSizes = [];
        filterState.selectedConnectivity = [];
        
        const pricePageLeft = document.querySelector('#pricePage .price_left_thumb');
        const pricePageRight = document.querySelector('#pricePage .price_right_thumb');
        const filterPageLeft = document.querySelector('#filterPage .price_left_thumb');
        const filterPageRight = document.querySelector('#filterPage .price_right_thumb');
        
        pricePageLeft.value = 0;
        pricePageRight.value = 10000;
        filterPageLeft.value = 0;
        filterPageRight.value = 10000;
        
        updateRangeVisuals('#pricePage');
        updateRangeVisuals('#filterPage');
        
        document.querySelectorAll('#brandPage .brand_checkbox').forEach((checkbox) => {
            const logo = checkbox.querySelector('.checkbox_logo');
            logo.style.display = 'none';
            checkbox.style.background = '#fff';
            checkbox.classList.remove('active');
        });
        
        document.querySelectorAll('#filterPage .brand_content_ul .brand_checkbox').forEach((checkbox) => {
            const logo = checkbox.querySelector('.checkbox_logo');
            logo.style.display = 'none';
            checkbox.style.background = '#fff';
            checkbox.classList.remove('active');
        });
        
        updatePriceClearButton('#pricePage');
        updatePriceClearButton('#filterPage');
        updateBrandClearButton();
        updateFilterPageClearButton();
        
        isSyncing = false;
        
        applyGlobalFilters();
    });

    document.querySelectorAll('.see_product_text').forEach((btn) => {
        btn.addEventListener('click', () => {
            mainPage.style.display = 'block';
            header.style.display='block'
            pricePage.style.display = 'none';
            brandPage.style.display = 'none';
            filterPage.style.display = 'none';
        });
    });          
})
