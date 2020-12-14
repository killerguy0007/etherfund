'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const provider= window.web3.provider;
// const web3=new Web3(provider);

//let means we want to be able to reassign this variable;
var web3 = void 0;
//if we are in the browser && metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//then create a 
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//if we are at the server *or* the user is not running metamask
	//we set up our own provider
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/34d212a7526247ab9d2f8e05435b2fe0');
	web3 = new _web2.default(provider);
}

//---------------------this was first hit and try solution--------------------------------

// window.addEventListener("load", async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     try {
//       // Request account access if needed
//       await window.ethereum.enable();
//     } catch (error) {
//       // User denied account access...
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//   }
//   // Non-dapp browsers...
//   else {
//     console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
//   }
// });


//------------------------------------------------------------------------------------------

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUlBLE9BQU8sS0FBSyxDQUFoQjtBQUNBO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE9BQU9ELElBQWQsS0FBdUIsV0FBNUQsRUFBeUU7QUFDeEU7QUFDQUEsUUFBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0EsQ0FIRCxNQUdPO0FBQ047QUFDQTtBQUNBLEtBQUlDLFdBQVcsSUFBSSxjQUFLQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLCtEQUFoQyxDQUFmO0FBQ0FMLFFBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNBOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztrQkFFZUgsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG4vLyBjb25zdCBwcm92aWRlcj0gd2luZG93LndlYjMucHJvdmlkZXI7XG4vLyBjb25zdCB3ZWIzPW5ldyBXZWIzKHByb3ZpZGVyKTtcblxuLy9sZXQgbWVhbnMgd2Ugd2FudCB0byBiZSBhYmxlIHRvIHJlYXNzaWduIHRoaXMgdmFyaWFibGU7XG52YXIgd2ViMyA9IHZvaWQgMDtcbi8vaWYgd2UgYXJlIGluIHRoZSBicm93c2VyICYmIG1ldGFtYXNrIGlzIHJ1bm5pbmdcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG5cdC8vdGhlbiBjcmVhdGUgYSBcblx0d2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuXHQvL2lmIHdlIGFyZSBhdCB0aGUgc2VydmVyICpvciogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcblx0Ly93ZSBzZXQgdXAgb3VyIG93biBwcm92aWRlclxuXHR2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKCdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzM0ZDIxMmE3NTI2MjQ3YWI5ZDJmOGUwNTQzNWIyZmUwJyk7XG5cdHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tdGhpcyB3YXMgZmlyc3QgaGl0IGFuZCB0cnkgc29sdXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuLy8gICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxuLy8gICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4vLyAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzIGlmIG5lZWRlZFxuLy8gICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAvLyBVc2VyIGRlbmllZCBhY2NvdW50IGFjY2Vzcy4uLlxuLy8gICAgIH1cbi8vICAgfVxuLy8gICAvLyBMZWdhY3kgZGFwcCBicm93c2Vycy4uLlxuLy8gICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xuLy8gICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuLy8gICB9XG4vLyAgIC8vIE5vbi1kYXBwIGJyb3dzZXJzLi4uXG4vLyAgIGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiKTtcbi8vICAgfVxuLy8gfSk7XG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUlBLE9BQU8sS0FBSyxDQUFoQjtBQUNBO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE9BQU9ELElBQWQsS0FBdUIsV0FBNUQsRUFBeUU7QUFDeEU7QUFDQUEsUUFBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0EsQ0FIRCxNQUdPO0FBQ047QUFDQTtBQUNBLEtBQUlDLFdBQVcsSUFBSSxjQUFLQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLCtEQUFoQyxDQUFmO0FBQ0FMLFFBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNBOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztrQkFFZUgsSSIsImZpbGUiOiJ1bmtub3duIn0=