import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItems from "./MenuItems";


const PopularMenu = () => {
    const [itemsData, setItemsData] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category == 'popular')
                setItemsData(popularItems)
            })
    }, [])
    // console.log(itemsData);
    return (
        <section className="mb-12"> 
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    itemsData.map(items => <MenuItems key={items._id} item={items} />)
                }
            </div>


        </section>
    );
};

export default PopularMenu;