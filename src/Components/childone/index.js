import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';


//
class Childone extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        
        // Define a model for linear regression. 
        
        const dense = tf.layers.dense({
            units: 1, 
            inputShape: [1]
        });
        
        const model = tf.sequential();
        model.add(dense);

        // Prepare for training
        model.compile({
            loss: 'meanSquaredError', 
            optimizer: 'sgd'
        });

        // training data
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train 
        model.fit(xs, ys).then(() => {

            // print
            model
            .predict(tf.tensor2d([5], [1, 1]))
            .print();

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