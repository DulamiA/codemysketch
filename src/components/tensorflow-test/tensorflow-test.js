import React, { Component } from 'react';

class TensorflowTest extends Component {
	state = {};
    constructor(props) {
        super(props);
        this.predict = this.predict.bind(this);
    }

	componentDidMount() {
		this.loadModel();
	}

	async loadModel() {
		this.tfliteModel = await window.tflite.loadTFLiteModel(
			"http://localhost:3000/detect.tflite"
		);
	}

	async predict() {
		// Prepare input tensors.
		const img = window.tf.browser.fromPixels(document.querySelector("img"));

        const input = window.tf.expandDims(img);
        // reshape to 320x320
        const resized = window.tf.image.resizeBilinear(input, [320, 320]);

		// Run inference and get output tensors.
        const outputTensor = this.tfliteModel.predict(resized);
        console.log(outputTensor);

    }

	render() {
		return <div>
            <img src="http://localhost:3000/test.jpg" alt="test" />
            <button onClick={this.predict}>Predict</button>
        </div>;
	}
}
 
export default TensorflowTest;