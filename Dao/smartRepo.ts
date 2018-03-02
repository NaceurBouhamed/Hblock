import Web3 = require('web3');


export class SmartRepo {

web3:any;

hblockContract:any;

hblockDAO:any;

GasPrice:any;

checkAndInstatiateWeb3=() => {
this.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));

this.web3.eth.defaultAccount  =  '0x2420cb97b5791B7bC65dBe3C0001B28D1cA575ab';


this.hblockContract = this.web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"patients","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"grantAccess","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addClinic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"records","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"doc","type":"address"}],"name":"addDoctor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"getRecord","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clinics","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"},{"name":"hsh","type":"bytes32"}],"name":"appendToRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"addPatient","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"doctors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"patient","type":"address"}],"name":"forceGetRecord","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);

this.hblockDAO = this.hblockContract.at('0x2e4347836005cebeed350f0f11133d166c8eb236');

this.GasPrice = this.web3.toWei(0.00001, "ether");


    }


}