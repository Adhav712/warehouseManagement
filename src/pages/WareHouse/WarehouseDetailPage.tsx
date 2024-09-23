import FormComponent from "@/components/FormComponent";
import { WareHouseData } from "@/Interfaces/interface";
import { updateWarehouse } from "@/services/warehouse/WarehouseSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


const WarehouseDetailPage = () => {
    const location = useLocation()
    const { propsData } = location.state || { propsData: {} };
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter Warehouse name',
            validation: { required: true, minLength: 3, maxLength: 20 },
        },
        {
            name: 'code',
            label: 'Code',
            type: 'text',
            placeholder: 'Enter Warehouse code',
            validation: { required: true, minLength: 3, maxLength: 10 },
        },
        {
            name: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'Enter City name',
            validation: { required: true, minLength: 3, maxLength: 20 },
        },
        {
            name: 'space_available',
            label: 'Available Space',
            type: 'number',
            placeholder: 'Enter Available Space',
            validation: { required: true, minLength: 1, maxLength: 10 },
        },
        {
            name: 'type',
            label: 'Type',
            type: 'text',
            placeholder: 'Enter Warehouse type',
            validation: { required: true, minLength: 3, maxLength: 20 },
        },
        {
            name: 'cluster',
            label: 'Cluster',
            type: 'text',
            placeholder: 'Enter Warehouse cluster',
            validation: { required: true, minLength: 3, maxLength: 20 },
        },
        {
            name: 'is_registered',
            label: 'Is Registered',
            type: 'checkbox',
        },
        {
            name: 'is_live',
            label: 'Is Live',
            type: 'checkbox',
        },

    ];

    const handleSubmit = (values: {
        [key: string]:
        string | boolean | number | null
    }) => {
        console.log('Form Submitted:', values);
        dispatch(updateWarehouse(values));
        navigate('/warehouse');
    };

    return (
        <div style={{
            margin: '10%',
        }}>

            <FormComponent<WareHouseData>
                fields={fields}
                onSubmit={handleSubmit}
                initialValues={propsData}
            />
        </div>
    );
}

export default WarehouseDetailPage