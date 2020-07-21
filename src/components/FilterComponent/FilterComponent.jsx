import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addFilter,removeFilter } from '../../redux/reducers/Filters/Filters';
import Container from "@material-ui/core/Container";
import './FilterComponent.scss'

const FilterComponent = props => {
    const dispatch = useDispatch();
    const filterArr= Array.from(new Set(props.products.map((i => i.type))));
    const handleOnchange = (elem) => {
       if(props.filters.indexOf(elem) === -1){
           dispatch(addFilter(elem));
       }
       else{
           dispatch(removeFilter(elem))
       }
    }
    if (props.loading) {
        return <h1 style={{ textAlign: "center" }}>Loading Filters...</h1>;
      }
    return (
        <Container fixed>
        <div className="filter">
            <div className="filterButton">Filters</div>
            {filterArr.map((i) => (
                <span key ={i}>
                <input style={{minHeight:'0'}}type="checkbox" id={i} name={i} value={i} onChange={() => handleOnchange(i)}/>
                <label htmlFor={i}>{i}</label>
                </span>
            )
            )}
        </div>
        </Container>
    );
};

FilterComponent.propTypes = {
   products: PropTypes.array.isRequired,
   Filters: PropTypes.array.isRequired,
};

export default FilterComponent;