import React,{ useState, useEffect}  from 'react';
import './QuantityPicker.css'
export const  QuantityPicker = props => {

const [value, setValue] = useState(props.value?props.value:0)

    const onRemove = () => {
    if(props.onRemove){
        props.onRemove();
        }
    }

    const onAdd = () => {
        if(props.onAdd){
            props.onAdd();
        }
    }

const handleChange = (nm) => (event)=>{
  const plusValue  = Number(value) + 1;
  const minusValue = Number(value) - 1;
  event.preventDefault();
  switch(nm){
      case 'increment':{
          if(props.max === undefined){
              onAdd();
              setValue(plusValue);
              props.onChange && props.onChange(plusValue);
          }
          else if(plusValue <= Number(props.max)){
              onAdd();
              setValue(plusValue);
              props.onChange && props.onChange(plusValue)
          }        
          break;
      }
      case 'decrement':{
        if(props.min === undefined){
          onRemove();
          setValue(minusValue);
          props.onChange && props.onChange(minusValue)
        }
        else if(minusValue >= Number(props.min)){
            onRemove();
            setValue(minusValue);
            props.onChange && props.onChange(minusValue)
          }
        break;
      }
      case 'input':{
        if(props.min === undefined && props.max === undefined){
          if(!isNaN(event.target.value)){
            setValue(event.target.value)
            props.onChange && props.onChange(event.target.value)
          }
        }
        else if(event.target.value >= Number(props.min) && event.target.value <= Number(props.max)){
          if(!isNaN(event.target.value)){
              setValue(event.target.value)
              props.onChange && props.onChange(event.target.value)
          }

        }
        }
        break
      }
}
useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  return function cleanup() {
    abortController.abort();
  };
}, []);

    return (
      props.onAdd ?
      <span className="quantity-picker">
        <button className={`${props.disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`}
                onClick={handleChange('decrement')}>&ndash;</button>
        <input style={{width:props.width?props.width:'4rem'}} className="quantity-display" type="text"
               value={value} onChange={handleChange('input')} />
        <button className={`${props.disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`}
                onClick={handleChange('increment')}>&#xff0b;</button>
      </span>
       :
       <span className="quantity-picker">
        <button className={`${props.disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} 
        onClick={handleChange('decrement')}>&ndash;</button>
        <input style={{width:props.width?props.width:'4rem'}} className="quantity-display" type="text" 
        value={value} onChange={handleChange('input')} />
        <button className={`${props.disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} 
        onClick={handleChange('increment')}>&#xff0b;</button>
      </span>
      
    );
}
