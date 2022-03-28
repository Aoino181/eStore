import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Холодильники'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Комплектующие'},
        ]
        this._brands = [
            {id: 1, name: 'OnePlus'},
            {id: 2, name: 'Lenovo'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 2, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 3, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 4, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 5, name: 'Nord CE', price: 49990, rating: 3, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 6, name: 'Nord CE', price: 49990, rating: 4, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}