import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Холодильники'}
        ]
        this._brands = [
            {id: 1, name: 'OnePlus'},
            {id: 2, name: 'Lenovo'}
        ]
        this._devices = [
            {id: 1, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 2, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 3, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
            {id: 4, name: 'Nord CE', price: 49990, rating: 5, img: 'http://localhost:5000/a08ba195-6483-4cb0-8ef3-c1b991df0dc5.webp'},
        ]
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

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}