import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import bgImage from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../components/sectionTitle/sectionTitle'
import useMenu from '../../../Hooks/useMenu'
import MenuCategory from '../menuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import soupsImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(items => items.category == 'dessert')
    const pizza = menu.filter(items => items.category == 'pizza')
    const salads = menu.filter(items => items.category == 'salad')
    const soups = menu.filter(items => items.category == 'soup')


    // console.log(pizza, dessert, salads, soups);

    return (
        <div>

            <Helmet>
                <title>Bistro | Our Menu</title>
            </Helmet>
            <Cover image={bgImage} title={'Our Menu'} />
            <SectionTitle
                heading={"Don't miss"}
                subHeading={'Todays Offer'}
            >
            </SectionTitle>
            <MenuCategory coverImg={dessertImg} title="dessert" items={dessert} />
            <MenuCategory coverImg={pizzaImg} title="pizza" items={pizza} />
            <MenuCategory coverImg={saladsImg} title="salads" items={salads} />
            <MenuCategory coverImg={soupsImg} title="soups" items={soups} />
          









        </div>
    );
};

export default Menu;