document.addEventListener('DOMContentLoaded', ()=>{
        const products=[
        {
            id:1,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/09/Product-image-removebg-preview-300x200.png',
            name:'Arion Frost Barebone',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00'
        },
        {
            id:2,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/Keychrone-04-300x200.png',
            name:'Royal Kludge R75-WIRELESS',
            rate:'★★★★☆',
            dis_price:'₹9,000.00',
            price:'₹5,499.00'
        },
        {
            id:3,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/06/1000105380-300x200.webp',
            name:'Keychron V5 Max Wireless',
            rate:'★★★★★',
            dis_price:'₹16,000.00',
            price:'₹9,500.00'
        },
        {
            id:4,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/2-930x620.jpg',
            name:'Arion Frost x Keychron K8 Pro',
            rate:'★★★★★',
            dis_price:'₹15,000.00',
            price:'₹7,999.00'
        },
        {
            id:5,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2023/11/Keychrone-04-300x200.png',
            name:'EPOMAKER x AULA F75',
            rate:'★★★★★',
            dis_price:'₹7,500.00',
            price:'₹5,999.00'
        },
        {
            id:6,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/Epomaker-X-Galaxy-100-Grey-07-Copy-300x200.webp',
            name:'EPOMAKER X GALAXY 100',
            rate:'★★★☆☆',
            dis_price:'₹17,000.00',
            price:'₹4,999.00'
        },
        {
            id:7,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/01/Rk65-Wireless-A-930x620.png',
            name:'Royal Kludge R65-WIRELESS',
            rate:'★★★☆☆',
            dis_price:'₹10,000.00',
            price:'₹2,999.00'
        },
        {
            id:8,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/EPOMAKER-X-AULA-F75-Max-Black-side-printed-02-300x200.webp',
            name:'EPOMAKER x AULA F75',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00'
        },
        {
            id:9,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/07/RK-R75-Skycyan-1-930x620.webp',
            name:'EPOMAKER x AULA F75 MAX',
            rate:'★★★★★',
            dis_price:'₹10,500.00',
            price:'₹6,999.00'
        },
        {
            id:10,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/EPOMAKER-x-AULA-F99-PRO-Black-Side-Printed-01-300x200.webp',
            name:'Royal Kludge RK R75',
            rate:'★★★★★',
            dis_price:'₹7,000.00',
            price:'₹4,699.00'
        },
        {
            id:11,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/11/Aula-f87-pro-white-green-7-1024x683.jpg',
            name:'EPOMAKER x AULA F99 Pro',
            rate:'★★☆☆☆',
            dis_price:'₹15,000.00',
            price:'₹7,900.00'
        },
        {
            id:12,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/06/Aula-F75-MAX-Black-Side-Printed-00_-300x200.webp',
            name:'Aula F87 Pro Wireless',
            rate:'★★★★☆',
            dis_price:'₹15,000.00',
            price:'₹5,999.00'
        },
        {
            id:13,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/07/RKR65-Phantom-1-300x200.webp',
            name:'Aula F75 MAX',
            rate:'★★★★☆',
            dis_price:'₹12,500.00',
            price:'₹7,500.00'
        },
        {
            id:14,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/07/Ajazz-AK820-Pro-Grey-Gift-Switch-01-300x200.webp',
            name:'Roayl Kludge RK R65',
            rate:'★★★★★',
            dis_price:'₹6,500.00',
            price:'₹4,399.00'
        },
        {
            id:15,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2022/12/Ducky-One-3-SF-Pure-White-RGB-6-930x620.webp',
            name:'EPOMAKER X AJAZZ AK820 Pro',
            rate:'★★★★★',
            dis_price:'₹7,500.00',
            price:'₹5,999.00'
        },
        {
            id:16,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2020/11/GK61-black-1-min-300x200.webp',
            name:'Ducky one 3 SF Pure White RGB',
            rate:'★☆☆☆☆',
            dis_price:'₹12,199.00',
            price:'₹6,099.00'
        },
        {
            id:17,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/09/Aula-f99-grey-black-white-1-930x620.jpg',
            name:'SK61 - RGB(Gateron Optical Switches)',
            rate:'★★★★★',
            dis_price:'₹10,000.00',
            price:'₹4,799.00'
        },
        {
            id:18,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/08/GK-64-TRANSLUCENT-300x200.webp',
            name:'Aula F99 Wireless',
            rate:'★☆☆☆☆',
            dis_price:'₹10,000.00',
            price:'₹7,500.00'
        },
        {
            id:19,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2024/08/RK-M87-RD-9-930x620.webp',
            name:'Skyloong GK61 - V2',
            rate:'★★☆☆☆',
            dis_price:'₹7,000.00',
            price:'₹4,999.00'
        },
        {
            id:20,
            src:'https://mks.blr1.cdn.digitaloceanspaces.com/uploads/2025/01/10-930x620.webp',
            name:'Royal Kludge RK M87',
            rate:'★☆☆☆☆',
            dis_price:'₹11,000.00',
            price:'₹8,999.00'
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

    priceFilter.addEventListener('click', () => {
    mainPage.style.display = 'none';
    pricePage.style.display = 'flex';
    });
    backBtn.addEventListener('click', () => {
    pricePage.style.display = 'none';
    mainPage.style.display = 'block';
    });

    brands.addEventListener('click', () => {
    mainPage.style.display = 'none';
    brandPage.style.display = 'flex';
    });
    backBtnBrand.addEventListener('click', () => {
    mainPage.style.display = 'block';
    brandPage.style.display = 'none';
    });

    filterBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    filterPage.style.display = 'flex';
    });
    backBtnFilter.addEventListener('click', () => {
    mainPage.style.display = 'block';
    filterPage.style.display = 'none';
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

})

