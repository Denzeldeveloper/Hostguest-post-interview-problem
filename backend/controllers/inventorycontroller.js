import InventoryData from '../models/inventory.js';


//inventory controller
//use httpstatuses.com to understand the below codes 200,201,400 and 409
export const getInventory = async(req, res) => {
    try {
        //find and wait for all the data in db and save it to allinventories
        const allInventories = await InventoryData.find();
        //response 200=okay    
        res.status(200).json(allInventories);
    } catch (error) {
        //exception thrown in case of failure 
        res.status(400).json({ message: error.message });
    }
}

export const createInventory = (req, res) => {
    const inventory = req.body;
    //saving data to db if need be
    // (inventory) is the variable then the first InventoryData is the model
    const newInventory = new InventoryData(inventory);

    try {

        newInventory.save();
        // 201 = successfully saved response
        res.status(201).json(newInventory);

    } catch (error) {
        //409 = unsuccessfull/ errpr
        res.status(409).json({ message: error.message });

    }
}