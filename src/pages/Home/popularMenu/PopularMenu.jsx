import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItems from "./MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(items => items.category == 'popular')

    return (
        <section className="mb-12"> 
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    popularItems.map(items => <MenuItems key={items._id} item={items} />)
                }
            </div>


        </section>
    );
};

export default PopularMenu;