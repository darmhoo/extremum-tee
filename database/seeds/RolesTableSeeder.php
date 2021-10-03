<?php

use App\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->delete();
        $roles = [
            'Super Admin',
            'Admin',
            'User',
        ];
        for ($i = 0; $i < count($roles); $i++) {
            Role::create(['name' => $roles[$i]]);
        }
    }
}
