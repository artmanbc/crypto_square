var Crypto = function(text){
	this.message = text;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlainText().length;
	return Math.ceil(Math.sqrt(length));		
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();
	for (var i = 0; i < npt.length; i += size) {
		segments.push(npt.substr(i,size));
	}
	//return an array
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var code = "",
		size = this.size(),
		segs = this.plaintextSegments();
	for (var i = 0; i < size; i += 1) {
		for (var j = 0; j < segs.length; j += 1) {
			code += segs[j].charAt(i);
		}
	}
	//return a string
	return code;
};

module.exports = Crypto;
