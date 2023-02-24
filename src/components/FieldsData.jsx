import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export const FieldsData = ({data,name,email,index,setData}) => {
   const removeItem = () => {
        let arr = data;
        arr.splice(index,1);
        setData([...arr]);

   }
  return (
    <div className='data_val'>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4><Button variant="contained" color="error" onClick={removeItem} > <DeleteIcon /></Button></h4>
        </div>
  )
}
