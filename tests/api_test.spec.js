const { default: axios } = require("axios");
const { expect } = require("chai");
const { v4: uuidv4 } = require('uuid');

describe('API Test', () => {
    
        describe('Test /api/getAll', () => {
    
            it('Get All API', async () => {
    
                const actualResult = await axios.get('http://localhost:3000/api/getAll');
                console.log(actualResult.data);
                //log the type of data you get back
                console.log(typeof actualResult.data);
    
                expect(actualResult.status).to.equal(200);
    
            });
    
        });

        // do a post request to the server on route /api with the following body:
        // {
        //     "KEY": "generated uuid",
        //     "VALUE": "random string"
        // }
        // and check if the response is 200
                
        describe('Test /api/post', () => {
                
            it('Post API', async () => {

                const data = {
                    "key": uuidv4(),
                    "attribute": "test it's a random string normally"
                }

                const actualResult = await axios.post('http://localhost:3000/api/post', data);
                expect(actualResult.status).to.equal(200);

            });
        });
    });

