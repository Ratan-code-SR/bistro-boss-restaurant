import Cover from "../../../shared/Cover/Cover";
import MenuItems from "../../Home/popularMenu/MenuItems";


const MenuCategory = ({ title, coverImg, items }) => {
    return (
        <>
            {
                title && <Cover image={coverImg} title={title} />
            }

            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    items.map(items => <MenuItems key={items._id} item={items} />)
                }
            </div>
        </>
    );
};

export default MenuCategory;