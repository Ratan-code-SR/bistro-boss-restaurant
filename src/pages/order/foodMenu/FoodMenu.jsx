

const FoodMenu = ({ item }) => {
    const { name,
        image,
        recipe,
        price
    } = item;
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 ">
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <p className="absolute top-5 right-6 bg-black text-white p-2">${price}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to Card</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FoodMenu;