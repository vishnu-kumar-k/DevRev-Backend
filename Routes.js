const express=require("express");
const UserSignup = require("./Authentication/UserSignup");
const UserLogin = require("./Authentication/UserLogin");
const AddFlight = require("./Flight/AddFlight");
const GetFlight = require("./Flight/GetFlight");
const AdminLogin = require("./Authentication/AdminLogin");
const AdminFlight = require("./Flight/AdminFlight");
const RemoveFlight = require("./Flight/RemoveFlight");
const Location = require("./Flight/Location");
const Booking = require("./Booking/Booking");
const MyBooking = require("./Booking/MyBooking");
const TicketDetails = require("./Booking/TicketDetails");
const FlightBooking = require("./Booking/FlightBooking");
const Adminverify = require("./Authentication/Adminverify");
const Userverify = require("./Authentication/Userverify");



const router=express.Router();


router.route("/signup").post(UserSignup)
router.route("/login").post(UserLogin)
router.route("/booking").post(Booking);
router.route("/mybooking").post(MyBooking);
router.route("/ticketdetails").post(TicketDetails);
router.route("/verifyuser").post(Userverify);



router.route("/addflight").post(AddFlight)
router.route("/getflight").post(GetFlight)
router.route("/admin/flightbooking").post(FlightBooking)
router.route("/verifyadmin").post(Adminverify)

router.route("/location").post(Location)
router.route("/flight").post(GetFlight)
router.route("/admin/login").post(AdminLogin)
router.route("/admin/flight").post(AdminFlight)
router.route("/admin/removeflight").post(RemoveFlight)
module.exports=router;