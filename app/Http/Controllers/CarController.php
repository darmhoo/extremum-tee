<?php

namespace App\Http\Controllers;

use App\Car;
use App\Category;
use App\Http\Filters\CarFilter;
use App\Http\Requests\CarRequest;
use App\Repositories\CarRepository;
use Illuminate\Http\Response;

class CarController extends Controller
{
    private $carRepo;

    public function __construct(CarRepository $carRepository)
    {
        $this->carRepo = $carRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(CarFilter $filter)
    {
        $cars = $this->carRepo->getAll($filter);

        return $this->sendSuccess($cars->toArray(), 'Cars retrieved successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return Response
     */
    public function store(CarRequest $request)
    {
        $car = $this->carRepo->store($request->validated());

        return $this->sendSuccess($car->toArray(), 'Car Successfully Created');
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function show(Car $car)
    {
        return $this->sendSuccess($car->toArray(), 'Car retrieved successfully');
    }

    /**
     * @param Category $category
     * @param CategoryRequest $request
     *
     * @return Response
     */
    public function update(Car $car, CarRequest $request)
    {
        $car = $this->carRepo->update($car, $request->validated());

        return $this->sendSuccess($car->toArray(), 'Car updated successfully');
    }

    /**
     * @param Category $category
     * @return Response
     * @throws \Exception
     */
    public function destroy(Car $category)
    {
        $category->delete();

        return $this->sendSuccess([],'Car deleted successfully');
    }
}
