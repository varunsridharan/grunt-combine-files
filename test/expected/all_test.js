var $include1 = 'Include 1'; var $include2 = 'Include 2'; var $include3 = 'Include 3'; var $include5 = 'Include 5'; var $include4 = 'Include 4'; //@grunt-append parts/include-1.js

function js_function_1 () {
	//@grunt-append parts/include-2.js
}

//@grunt-append parts/include-3.js
//@grunt-append parts/include-5.js
//@grunt-append parts/include-4.js ,function js_function_3 () {
	var $include2 = 'Include 2'; 
	var $include3 = 'Include 3'; 
}
 ,//@grunt-prepend parts/include-6.js

function js_function_2 () {
	//@grunt-prepend parts/include-7.js
}

//@grunt-prepend parts/include-8.js
//@grunt-prepend parts/include-9.js
//@grunt-prepend parts/include-5.js var $include6 = 'Include 6'; var $include7 = 'Include 7'; var $include8 = 'Include 8'; var $include9 = 'Include 9'; var $include5 = 'Include 5'; ,function js_function_4 () {
	var $include10 = 'Include 10';
//@grunt-prepend include-10-1.js
//@grunt-prepend include-10-2.js var $include10_1 = 'Include 10-1';
//@grunt-prepend include-10-1-1.js var $include10_1_1 = 'Include 10 1 1';
//@grunt-prepend include-10-1-1-1.js var $include10_1_1_1 = 'Include 10 1 1 1'; var $include10_2 = 'Include 10_2'; 
} 