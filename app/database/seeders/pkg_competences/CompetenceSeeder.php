<?php

namespace Database\Seeders\pkg_competences;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\pkg_competences\Competence;
use App\Models\pkg_competences\NiveauCompetence;

class CompetenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        NiveauCompetence::create([
            'id' => '1',
        ]);
        NiveauCompetence::create([
            'id' => '2',
        ]);

        $csvFile = fopen(base_path("database/data/pkg_competences/Competences.csv"), "r");
        if ($csvFile === false) {
            throw new \Exception("Could not open the CSV file.");
        }

        $firstline = true;
        while (($data = fgetcsv($csvFile)) !== FALSE) {
            if (!$firstline) {
                Competence::create([
                    "nom" => $data[0],
                    "description" => $data[1],
                    "niveau_competences_id" => $data[2],
                    'updated_at' => Carbon::now(),
                    'created_at' => Carbon::now()
                ]);
            }
            $firstline = false;
        }

        fclose($csvFile);
    }
}
