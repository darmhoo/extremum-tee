<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('img_url');
            $table->integer('price');
            $table->mediumText('car_description');
            $table->string('manufacturer');
            $table->year('year_manufactured');
            $table->string('vehicle_type');
            $table->string('seat_type');
            $table->integer('no_of_seats');
            $table->mediumText('transmission_details')->nullable();
            $table->string('transmission_type');
            $table->mediumText('performance');
            $table->string('fuel_consumption')->nullable();
            $table->mediumText('features');
            $table->unsignedInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
