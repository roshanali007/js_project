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
const priceFilter = document.getElementById('priceFilter');
const mainPage = document.getElementById('mainPage');
const pricePage = document.getElementById('pricePage');
const backBtn = document.getElementById('backBtn');

priceFilter.addEventListener('click', () => {
  mainPage.style.display = 'none';
  pricePage.style.display = 'flex';
});

backBtn.addEventListener('click', () => {
  pricePage.style.display = 'none';
  mainPage.style.display = 'block';
});

const leftThumb=document.querySelector('.price_left_thumb')
const rightThumb=document.querySelector('.price_right_thumb')
const rangeLine=document.querySelector('.price_outside_line')
const minOutput = document.querySelector('.price_min')
const maxOutput=document.querySelector('.price_max')
const blocks=document.querySelectorAll('.price_each_block')

const minGap=100
const sliderMax = parseInt(leftThumb.max)

function updateRange(){
    let leftVal= parseInt(leftThumb.value)
    let rightVal= parseInt(rightThumb.value)

    const leftPercent = (leftVal/sliderMax)*100
    const rightPercent = (rightVal/sliderMax)*100

    rangeLine.style.left = `${leftPercent}%`
    rangeLine.style.width = `${rightPercent-leftPercent}%`
    
    minOutput.textContent=(leftVal===0)?'min':`₹${leftVal.toLocaleString()}`
    maxOutput.textContent=(rightVal===10000)?'max':`₹${rightVal.toLocaleString()}`

    if(blocks.length>0){
        const totalBlocks = blocks.length
        const rangeStep =sliderMax/totalBlocks

        blocks.forEach((block,index) => {
            const blockValue=rangeStep*index
            if(blockValue>=leftVal && blockValue <= rightVal){
                block.style.opacity=0.5
            }
            else{
                block.style.opacity =0.2
            }
        }); 
    }
    
}                               
leftThumb.addEventListener('input',()=>{
    if(parseInt(rightThumb.value)-parseInt(leftThumb.value)<= minGap){
        leftThumb.value=parseInt(rightThumb.value)-minGap
    }
    updateRange()
})
rightThumb.addEventListener('input',()=>{
    if(parseInt(rightThumb.value)-parseInt(leftThumb.value)<=minGap){
        rightThumb.value=parseInt(leftThumb.value)+minGap
    }
    updateRange()
})

updateRange()

const brands=document.getElementById('priceBrand')
const brandPage=document.getElementById('brandPage')
const backBtnBrand=document.getElementById('backBtnbrand')

brands.addEventListener('click',()=>{
    mainPage.style.display='none'
    brandPage.style.display='flex'
})

backBtnBrand.addEventListener('click',()=>{
    mainPage.style.display='block'
    brandPage.style.display='none'
})