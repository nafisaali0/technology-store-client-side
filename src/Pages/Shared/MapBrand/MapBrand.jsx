import { useState } from 'react';
import { useEffect } from 'react';
import ShowBrand from '../ShowBrand/ShowBrand';


const MapBrand = () => {

    const [brands, setBrands] = useState([]);

    // come from fake json file not DB
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    // console.log(brands)
    return (
        <>
            <div className='container mx-auto overflow-hidden my-16 p-5'>
                <div className='text-3xl text-[#c67700] font-bold text-left my-10'>
                    <h2>Shop By Brands</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        brands.map(brand => <ShowBrand key={brand.id} brand={brand}></ShowBrand>)
                    }
                </div>
            </div>
        </>
    );
};

export default MapBrand;