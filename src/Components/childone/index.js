import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';


//
class Childone extends Component{
    constructor(props){
        super(props);
        this.visualize = this.visualize.bind(this)
    }

    componentDidMount(){
        
        // read csv
        const d = tf.data.csv(require("../../data/1.csv"))
        // const d1 = d.take(10)
        // d1.toArray().then(res =>  console.log(res))

        //
        const points = d.map(record => ({
            x: record.sqft_living,
            y: record.price
        }));

        points.toArray().then(res => {
            this.visualize(res)
        })
 
       
    }

    visualize(pointsArr){

        tfvis.render.scatterplot({
            name: "my first plot ;)"
        },{
            values: [pointsArr],
            series: ["Blue Dots"]
        },{
            xLabel: "sqft living",
            yLabel: "Price"
        });

    }

    render(){
        return(
            <div> 
                my first linear regression
            </div>
        )
    }
}

//
export default Childone;