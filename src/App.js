import React from 'react';
import Cards from "./components/Cards/Cards";

import coronaImage from './images/coronavirus.png'
import CountryPicker from "./components/CountryPicker/CountryPicker";

import styles from "./App.module.css";

import { fetchData } from './api';

class App extends React.Component{
    state = {
        data : {},
        country :'',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData,country: country});
    }

    render(){
        const {data} = this.state;
    return(

        <div className={styles.container}>
            <img className= {styles.image} src ={coronaImage} alt= 'COVID-19'/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/> 
            <Cards data ={data}/>
            
            
        </div>
    )
}
}

export default App;