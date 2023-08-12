const axiosMock = jest.genMockFromModule('axios');

let mockResponse= {
  data: {'shops':
[{
  "location": 'test location',
  "address": 'test address'
}]}
};

axiosMock.getmockImplementation(req);

function req(){
  return new Promise(function(resolve){
    axiosMock.delayTimer = setTimeout(()=> {
      resolve(mockResponse);

    }, 2000);
  })
}

export default axiosMock;