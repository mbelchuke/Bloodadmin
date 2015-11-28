var mongoose      = require('mongoose');
var crypto        = require('crypto');
var Schema        = mongoose.Schema;

var SampleSchema    = new Schema({
    aP          :   { type: Number},
    bP          :   { type: Number},
    oP          :   { type: Number},
    aN          :   { type: Number},
    bN          :   { type: Number},
    oN          :   { type: Number},
    abP         :   { type: Number},
    abN         :   { type: Number},
    donor_id    :   String, 
    created_at  :   { type: Date },
    updated_at  :   { type: Date }
});

SampleSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;

    // if the type name is 'created_at' then store todays date as value into db
    if ( !this.created_at ) {
	this.created_at = now;
    }

    next();
});

// export the schema
module.exports = mongoose.model('Sample', SampleSchema);
