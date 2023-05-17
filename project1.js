class Hotel {
     #minFloor;
     #maxFloor;
    constructor(minFloor, maxFloor, address, numberOfRooms) {
      this.#minFloor = minFloor;
      this.#maxFloor = maxFloor;
      this.address = address;
      this.numberOfRooms = numberOfRooms;
      this.rooms = [];
  
      for (let i = this.#minFloor; i <= this.#maxFloor; i++) {
        for (let j = 1; j <= numberOfRooms; j++) {
          this.rooms.push(new Room(i, j, 100)); // Default room price is 100$
        }
      }
    }
  
    printAdvertisement() {
      console.log(`Welcome to ${this.address} Hotel! We have ${this.numberOfRooms} rooms available on floors ${this.#minFloor}-${this.#maxFloor}. Book now and enjoy `);
    }
  
    listBookedRooms() {
      const bookedRooms = this.rooms.filter(room => room.isBooked);
      if (bookedRooms.length === 0) {
        console.log(`No rooms have been booked yet.`);
      } else {
        console.log(`The following rooms have been booked:`);
        bookedRooms.forEach(room => console.log(`Room ${room.roomNum} on floor ${room.floorNum}`));
      }
    }
  }
  
  class Room{
    #isBooked;
      constructor(floorNum, roomNum, price) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
       this.#isBooked = false;
      }
    
      printRoom() {
        console.log(`Room ${this.roomNum} on floor ${this.floorNum}, price: ${this.price}$`);
      }
    
      book() {
        if (this.#isBooked) {
          console.log(`Sorry, Room ${this.roomNum} is already booked.`);
        } else {
          this.#isBooked = true;
          console.log(`Room ${this.roomNum} has been booked.`);
        }
      }
    
      isBooked() {
        return this.#isBooked;
      }
    }
  class RoomWithView extends Room{
      
        constructor( view, NumberOfBeds,floornum, roomNum,price){
         super(floornum, roomNum,price);
         this.view=view;
         this.NumberOfBeds=NumberOfBeds;
  
      }
      getView() {
        return this.view;
      }
    
      setView(view) {
        this.view = view;
      }
    
      getNumberOfBeds() {
        return this.numberOfBeds;
      }
    
      setNumberOfBeds(numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
      }
  }
  class SleepingRoom extends Room{
    constructor( PersonCapacity,floornum, roomNum,price){
      super(floornum, roomNum,price);
      this.PersonCapacity=PersonCapacity;
  }
  getPersonCapacity(){
  return this.PersonCapacity;
  }
  setPersonCapacity(PersonCapacity){
    this.PersonCapacity=PersonCapacity;
  }
  }
  
  
  const room = new Room(3, 101, 50);
  
  room.printRoom(); 
  console.log(room.isBooked());
  room.book();
  console.log(room.isBooked());
  room.book(); 
  
  const room1 = new RoomWithView(101, "single", 100, "ocean", 1);
  console.log(room1.getView()); 
  console.log(room1.getNumberOfBeds()); 
  room1.setView("mountain");
  room1.setNumberOfBeds(2);
  console.log(room1.getView()); 
  console.log(room1.getNumberOfBeds());
  
  const hotel = new Hotel( 1,5, '123 Main St', 10);
  const room3 = hotel.rooms[0];
  room3.book();  
  hotel.listBookedRooms();