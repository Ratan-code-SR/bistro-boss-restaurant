import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setItemsData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setItemsData(data)
                setLoading(false)
            })
    }, [])

    return [menu,loading];
};

export default useMenu;