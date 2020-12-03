const express = require('express');
const router = express.Router();
const User = require('../models/form')

router.post('/order', function(req,res){
    //res.json({msg:"order"});
    let user = new User();
    user.OrderNo=req.body.OrderNo;
    user.Date=req.body.Date;
    user.Name=req.body.Name;
    user.Address=req.body.Address;
    user.Tehsil=req.body.Tehsil;
    user.District=req.body.District;
    user.PinCode=req.body.PinCode;
    user.State=req.body.State;
    user.Whatsapp=req.body.Whatsapp;
    user.Contact=req.body.Contact;
    user.CompanyName=req.body.CompanyName;
    user.Order.Details=req.body.Order.Details;
    user.Order.Qty=req.body.Order.Qty;
    user.Order.Rate=req.body.Order.Rate;
    user.Order.Amount=req.body.Order.Amount;
    user.TotalAmt=req.body.TotalAmt;
    user.Advance=req.body.Advance;
    user.DeliveryDate=req.body.DeliveryDate;
    user.DeliveryPlace=req.body.DeliveryPlace;
    user.Deposit.DDate=req.body.Deposit.DDate;
    user.Deposit.Amount=req.body.Deposit.Amount;
    user.Deposit.UIRNo=req.body.Deposit.UIRNo;
    user.Deposit.Bank=req.body.Deposit.Bank;
    user.AcHolder=req.body.AcHolder;
    user.AcNo=req.body.AcNo;
    user.IFSC=req.body.IFSC;
    user.DealerName=req.body.DealerName;
    user.DealerContact=req.body.DealerContact;

    user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg:"didn't save"})
        }
        else{
            res.json({msg:"saved"})
        }
    })
});

router.get('/show',function(req,res){
    let id = req.params.CompanyName;
    User.find({},function(err,order){
        console.log(order)
        res.json(order)
    });
    
})
module.exports=router;