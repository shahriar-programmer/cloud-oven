import { useState } from 'react';
import FoodItem from './FoodItem';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Breakfast')

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="max-w-screen-xl px-6 mx-auto mt-16 mb-24" id='menu'>
            <div className="flex items-center justify-center space-x-6">
                <p className={`cursor-pointer p-2 px-4 rounded-full ${menuTab === 'Breakfast' ? "poppins bg-primary text-white" : "poppins text-black"}`} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</p>
                <p className={`cursor-pointer p-2 px-4 rounded-full ${menuTab === 'Lunch' ? "poppins bg-primary text-white" : "poppins text-black"}`} onClick={() => handleMenuTabs('Lunch')}>Lunch</p>
                <p className={`cursor-pointer p-2 px-4 rounded-full ${menuTab === 'Dinner' ? "poppins bg-primary text-white" : "poppins text-black"}`} onClick={() => handleMenuTabs('Dinner')}>Dinner</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
                <FoodItem description={"Gay one the what walk then she. Demesne mention pr"} foodType={"Breakfast"} image={"https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png"} price={20} title={"Eggs Benedict"} />
                <FoodItem description={"Gay one the what walk then she. Demesne mention pr"} foodType={"Breakfast"} image={"https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png"} price={20} title={"Eggs Benedict"} />
                <FoodItem description={"Gay one the what walk then she. Demesne mention pr"} foodType={"Breakfast"} image={"https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png"} price={20} title={"Eggs Benedict"} />
                <FoodItem description={"Gay one the what walk then she. Demesne mention pr"} foodType={"Breakfast"} image={"https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png"} price={20} title={"Eggs Benedict"} />
                <FoodItem description={"Gay one the what walk then she. Demesne mention pr"} foodType={"Breakfast"} image={"https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png"} price={20} title={"Eggs Benedict"} />
            </div>
        </section>
    )
}

export default Foods
