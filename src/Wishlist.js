import Car from "./car";

class Wishlist{
    constructor(){
        this.cars = []
        this.nextId = 1;

    }
    add(make, model, year){
        let newCar = new Car(this.nextId, make, model, year);
        this.cars.push(newCar);

        console.log(this.cars);

        this.addToDOM(newCar);
    }

    remove(id){
        this.cars = this.cars.filter((car) => car.id != id)
        this.removeFromDOM(id);
    }

    removeFromDOM(id){
        let ul = document.querySelector("#wishListContainer > ul");
        let li = document.querySelector(`#car${id}`);
        ul.removeChild(li);

    }

    addToDOM(car){
        let ul = document.querySelector("#wishListContainer > ul")
        let li = document.createElement("li");
        li.textContent = car.model; 
        li.id = `car${car.id}`;
        li.addEventListener("click", (event) =>{
            car.display();
            let removeBtn = document.querySelector("#removeBtn")
            removeBtn.disabled = false;
            removeBtn.onclick = (event) => {
                this.remove(car.id);
                document.querySelector("#car-make").textContent = ""
        document.querySelector("#car-model").textContent = ""
        document.querySelector("#car-year").textContent = ""

                removeBtn.disabled = true
            }
        });
        ul.appendChild(li);

    }
}
export default Wishlist