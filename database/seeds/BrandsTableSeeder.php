<?php

use App\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->delete();

        $brands = [
            'Polystar',
            'Infinix',
            'Itel',
            'Gionee',
            'Elepaq',
            'Haier Thermocool',
            'Century',
            'Tiger',
            'Sumo Premium',
            'Tecno',
            'Fero',
            'Vigitab',
            'Ox',
            'Hp'
        ];

        $length = count($brands);

        for ($i = 0; $i < $length; $i++) {
            Brand::create([
                'name' => $brands[$i]
            ]);
        }
    }
}
