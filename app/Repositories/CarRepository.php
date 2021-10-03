<?php

namespace App\Repositories;

use App\Car;
use App\Feedback;

class CarRepository extends Repository
{

    public function model()
    {
        return Car::class;
    }

    public function query($filter)
    {
        return $this->model::filter($filter);
    }
}
