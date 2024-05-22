import Cover from "../../shared/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./foodCard/FoodCard";
const Order = () => {
    // const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    const dessert = menu.filter(items => items.category == 'dessert')
    const pizza = menu.filter(items => items.category == 'pizza')
    const salads = menu.filter(items => items.category == 'salad')
    const soups = menu.filter(items => items.category == 'soup')
    const drinks = menu.filter(items => items.category == 'drinks')

    // console.log(salads);

    return (
        <div>
            <Cover image={orderImg} title='Our Shop' />
            <div className="flex justify-center items-center mx-auto">
                <Tabs>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINK</Tab>

                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5 ">
                            {salads.map((items,index) => 
                                <FoodCard key={index} item={items} />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5 ">
                            {dessert.map((items,index) => 
                                <FoodCard key={index} item={items} />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5 ">
                            {pizza.map((items,index) => 
                                <FoodCard key={index} item={items} />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5 ">
                            {soups.map((items,index) => 
                                <FoodCard key={index} item={items} />
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5 ">
                            {drinks.map((items,index) => 
                                <FoodCard key={index} item={items} />
                            )}
                        </div>
                    </TabPanel>
                 
                </Tabs>
            </div>
        </div>
    );
};

export default Order;