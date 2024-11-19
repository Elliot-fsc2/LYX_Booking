<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Service;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $categories = [
            [
                'name' => 'Hair Services',
            ],
            [
                'name' => 'Premium Services',
            ],
            [
                'name' => 'Hair Packages',
            ],
            [
                'name' => 'Nail Services',
            ],
            [
                'name' => 'Additional Services',
            ],
            [
                'name' => 'Lashes and Brows Services',
            ],
            [
                'name' => 'Waxing Services',
            ],
            [
                'name' => 'Threading Services',
            ],
            [
                'name' => 'Skin Care Services',
            ],
        ];

        $services = [

            //Hair Services

            [
                'name' => 'Haircut + Blower',
                'description' => 'A basic haircut with a blow-dry finish.',
                'price' => 1000,
                'status' => 'available',
                'image' => 'images/haircut.jpg',
                'duration' => 30,
                'category_id' => 1
            ],
            [
                'name' => 'Haircut + Shampoo + Blower',
                'description' => 'A haircut with a shampoo and blow-dry finish.',
                'price' => 1200,
                'status' => 'available',
                'image' => 'images/hair_shampoo.jpg',
                'duration' => 60,
                'category_id' => 1
            ],
            [
                'name' => 'Hair Iron',
                'description' => 'A hair ironing treatment to smooth and straighten hair.',
                'price' => 300,
                'status' => 'available',
                'image' => 'images/hair_ iron.jpg',
                'duration' => 30,
                'category_id' => 1
            ],
            [
                'name' => 'Basic Curling',
                'description' => 'A basic curling treatment to add waves and texture to hair.',
                'price' => 400,
                'status' => 'available',
                'image' => 'images/hair_curling.jpg',
                'duration' => 30,
                'category_id' => 1
            ],
            [
                'name' => 'Hair Treatment',
                'description' => 'A hair treatment to nourish and repair damaged hair.',
                'price' => 600,
                'status' => 'available',
                'image' => 'images/hair_treat.jpg',
                'duration' => 60,
                'category_id' => 1
            ],
            [
                'name' => 'Basic Color',
                'description' => 'A basic hair coloring treatment.',
                'price' => 1799,
                'status' => 'available',
                'image' => 'images/hair_dye.jpg',
                'duration' => 90,
                'category_id' => 1
            ],
            [
                'name' => 'Ombre Color',
                'description' => 'An ombre hair coloring treatment for a gradient effect.',
                'price' => 2499,
                'status' => 'available',
                'image' => 'images/hair_ombre.jpg',
                'duration' => 90,
                'category_id' => 1
            ],
            [
                'name' => 'Highlights',
                'description' => 'A hair highlighting treatment to add dimension and color.',
                'price' => 1999,
                'status' => 'available',
                'image' => 'images/hair_highlight.jpg',
                'duration' => 90,
                'category_id' => 1
            ],
            [
                'name' => 'Hairbotox Treatment',
                'description' => 'A hair treatment to repair and restore damaged hair.',
                'price' => 2000,
                'status' => 'available',
                'image' => 'images/hair_botox.jpg',
                'duration' => 90,
                'category_id' => 1
            ],
            [
                'name' => 'Balayage',
                'description' => 'A balayage hair coloring treatment for a natural, sun-kissed look.',
                'price' => 3499,
                'status' => 'available',
                'image' => 'images/hair_balayage.jpg',
                'duration' => 120,
                'category_id' => 1
            ],
            [
                'name' => 'Illite',
                'description' => 'A hair treatment to repair and restore damaged hair.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/hair_illite.jpg',
                'duration' => 90,
                'category_id' => 1
            ],
            [
                'name' => 'Peekaboo',
                'description' => 'A hair coloring treatment for a subtle, peekaboo effect.',
                'price' => 1999,
                'status' => 'available',
                'image' => 'images/hair_peekaboo.jpg',
                'duration' => 90,
                'category_id' => 1
            ],

            //Hair Packages

            [
                'name' => 'HOT! Rebond + Cellophane',
                'description' => 'A rebonding treatment with cellophane for smooth, straight hair.',
                'price' => 1600,
                'status' => 'available',
                'image' => 'images/hair_rebond.jpg',
                'duration' => 120,
                'category_id' => 3
            ],
            [
                'name' => 'Rebond + Cellophane',
                'description' => 'A rebonding treatment with cellophane for smooth, straight hair.',
                'price' => 1800,
                'status' => 'available',
                'image' => 'images/hair_rebond.jpg',
                'duration' => 120,
                'category_id' => 3
            ],
            [
                'name' => 'Rebond + Color + Brazilian',
                'description' => 'A rebonding treatment with hair coloring and Brazilian blowout.',
                'price' => 1999,
                'status' => 'available',
                'image' => 'images/hair_brazil.jpg',
                'duration' => 180,
                'category_id' => 3
            ],
            [
                'name' => '3 in 1 Rebond',
                'description' => 'A rebonding treatment with hair coloring, hair protector, and hairstyling.',
                'price' => 2799,
                'status' => 'available',
                'image' => 'images/hair_ iron.jpg',
                'duration' => 180,
                'category_id' => 3
            ],
            [
                'name' => 'Peekaboo Korean Style',
                'description' => 'A hair coloring treatment with peekaboo highlights, hair protector, and hairstyling.',
                'price' => 2799,
                'status' => 'available',
                'image' => 'images/hair_korean_peekaboo.jpg',
                'duration' => 180,
                'category_id' => 3
            ],
            [
                'name' => 'PREMIUM BALAYAGE',
                'description' => 'A premium balayage hair coloring treatment with bleach, basic color, hairbotox treatment, hair protector, and hairstyling.',
                'price' => 3499,
                'status' => 'available',
                'image' => 'images/hair_balayage.jpg',
                'duration' => 240,
                'category_id' => 3
            ],

            //Nails Services

            [
                'name' => 'Manicure',
                'description' => 'A basic nail care treatment.',
                'price' => 350,
                'status' => 'available',
                'image' => 'images/nail_manicure.jpg',
                'duration' => 30,
                'category_id' => 4
            ],
            [
                'name' => 'Pedicure',
                'description' => 'A basic foot care treatment.',
                'price' => 350,
                'status' => 'available',
                'image' => 'images/nail_pedicure.jpg',
                'duration' => 30,
                'category_id' => 4
            ],
            [
                'name' => 'Imported Polish',
                'description' => 'A high-quality nail polish application.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/nail_imported_polish.jpg',
                'duration' => 30,
                'category_id' => 4
            ],
            [
                'name' => 'Softgel Extension',
                'description' => 'A soft gel nail extension treatment.',
                'price' => 999,
                'status' => 'available',
                'image' => 'images/nail_softgel.jpg',
                'duration' => 60,
                'category_id' => 4
            ],

            //Additional Services

            [
                'name' => 'Nail Art',
                'description' => 'A nail art design service.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/nail_art.jpg',
                'duration' => 30,
                'category_id' => 5
            ],
            [
                'name' => 'Stone/Accent',
                'description' => 'A nail stone or accent application.',
                'price' => 50,
                'status' => 'available',
                'image' => 'images/nail_stone.jpg',
                'duration' => 30,
                'category_id' => 5
            ],
            [
                'name' => 'Foot Mask',
                'description' => 'A foot mask treatment for soft, smooth skin.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/foot_massage.jpg',
                'duration' => 30,
                'category_id' => 5
            ],
            [
                'name' => 'Foot Massage',
                'description' => 'A foot massage treatment for relaxation.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/foot_massage.jpg',
                'duration' => 60,
                'category_id' => 5
            ],
            [
                'name' => 'Reflexology',
                'description' => 'A reflexology treatment for overall wellness.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/reflexology.jpg',
                'duration' => 60,
                'category_id' => 5
            ],
            [
                'name' => 'Half-Body Massage',
                'description' => 'A half-body massage treatment for relaxation.',
                'price' => 400,
                'status' => 'available',
                'image' => 'images/Half-Body_Massage.jpg',
                'duration' => 60,
                'category_id' => 5
            ],

            //Lashes and Brows

            [
                'name' => 'Eyelash Extension',
                'description' => 'An eyelash extension treatment for longer, thicker lashes.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/Eyelash_Extension.jpg',
                'duration' => 60,
                'category_id' => 6
            ],
            [
                'name' => 'Korean Lashlift',
                'description' => 'A Korean lashlift treatment for a natural, lifted look.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/korean_lash.png',
                'duration' => 60,
                'category_id' => 6
            ],
            [
                'name' => 'Brow Lamination',
                'description' => 'A brow lamination treatment for smooth, sleek brows.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/brow_lamination.jpg',
                'duration' => 60,
                'category_id' => 6
            ],
            [
                'name' => 'Brow Henna/Tint',
                'description' => 'A brow henna or tint treatment for defined brows.',
                'price' => 999,
                'status' => 'available',
                'image' => 'images/brow_henna.jpg',
                'duration' => 60,
                'category_id' => 6
            ],
            [
                'name' => 'Microblading',
                'description' => 'A microblading treatment for permanent, natural-looking brows.',
                'price' => 3499,
                'status' => 'available',
                'image' => 'images/microblading.jpg',
                'duration' => 120,
                'category_id' => 6
            ],
            [
                'name' => 'Ombre Brows',
                'description' => 'An ombre brow treatment for a gradient effect.',
                'price' => 3499,
                'status' => 'available',
                'image' => 'images/Ombre_Brows.jpg',
                'duration' => 120,
                'category_id' => 6
            ],
            [
                'name' => 'PowderBrows',
                'description' => 'A powder brow treatment for a soft, powdery effect.',
                'price' => 3499,
                'status' => 'available',
                'image' => 'images/PowderBrows.jpg',
                'duration' => 120,
                'category_id' => 6
            ],
            [
                'name' => 'Lip Pigmentation',
                'description' => 'A lip pigmentation treatment for permanent, natural-looking lip color.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/lip_pigmentation.jpg',
                'duration' => 90,
                'category_id' => 6
            ],
            [
                'name' => 'Lip Correction',
                'description' => 'A lip correction treatment for uneven or asymmetrical lips.',
                'price' => 2999,
                'status' => 'available',
                'image' => 'images/lip_correction.jpg',
                'duration' => 90,
                'category_id' => 6
            ],
            [
                'name' => 'Correction of Pigment',
                'description' => 'A correction of pigment treatment for uneven skin tone.',
                'price' => 3999,
                'status' => 'available',
                'image' => 'images/lip_correction.jpg',
                'duration' => 120,
                'category_id' => 6
            ],

            //Waxing

            [
                'name' => 'Underarms',
                'description' => 'An underarm waxing treatment for smooth, hair-free skin.',
                'price' => 199,
                'status' => 'available',
                'image' => 'images/waxing_underarm.jpg',
                'duration' => 30,
                'category_id' => 7
            ],
            [
                'name' => 'Half Legs',
                'description' => 'A half-leg waxing treatment for smooth, hair-free skin.',
                'price' => 499,
                'status' => 'available',
                'image' => 'images/waxing_legs.webp',
                'duration' => 60,
                'category_id' => 7
            ],
            [
                'name' => 'Full Legs',
                'description' => 'A full-leg waxing treatment for smooth, hair-free skin.',
                'price' => 799,
                'status' => 'available',
                'image' => 'images/waxing_legs.webp',
                'duration' => 60,
                'category_id' => 7
            ],
            [
                'name' => 'Bikini/Brazilian',
                'description' => 'A bikini or Brazilian waxing treatment for smooth, hair-free skin.',
                'price' => 999,
                'status' => 'available',
                'image' => 'images/waxing_bikini.jpg',
                'duration' => 60,
                'category_id' => 7
            ],

            //Threading

            [
                'name' => 'Eyebrow',
                'description' => 'An eyebrow threading treatment for shaped brows.',
                'price' => 150,
                'status' => 'available',
                'image' => 'images/threading_eyebrow.jpg',
                'duration' => 30,
                'category_id' => 8
            ],
            [
                'name' => 'Upper Lip',
                'description' => 'An upper lip threading treatment for smooth, hair-free skin.',
                'price' => 100,
                'status' => 'available',
                'image' => 'images/threading_lip.jpg',
                'duration' => 30,
                'category_id' => 8
            ],
            [
                'name' => 'Chin',
                'description' => 'A chin threading treatment for smooth, hair-free skin.',
                'price' => 100,
                'status' => 'available',
                'image' => 'images/threading_eyebrow.jpg',
                'duration' => 30,
                'category_id' => 8
            ],
            [
                'name' => 'Full Face',
                'description' => 'A full-face threading treatment for smooth, hair-free skin.',
                'price' => 400,
                'status' => 'available',
                'image' => 'images/threading_eyebrow.jpg',
                'duration' => 60,
                'category_id' => 8
            ],

            //skin care

            [
                'name' => 'Facials',
                'description' => 'A facial treatment for nourished and rejuvenated skin.',
                'status' => 'available',
                'image' => 'images/skin_facial.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Barbie Arms',
                'description' => 'A treatment for smooth, hair-free arms.',
                'status' => 'available',
                'image' => 'images/barbie_arms.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Meso Lipo',
                'description' => 'A mesotherapy treatment for weight loss and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/meso_lipo.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Scar Removal',
                'description' => 'A treatment for scar removal and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/scar_removal.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Warts Removal',
                'description' => 'A treatment for wart removal and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/warts_removal.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Laser Hair Removal',
                'description' => 'A laser hair removal treatment for smooth, hair-free skin.',
                'status' => 'available',
                'image' => 'images/lasser_hair_removal.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Gluta Drip/Push',
                'description' => 'A glutathione treatment for skin whitening and rejuvenation.',
                'status' => 'available',
                'image' => 'images/gluta_drip.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Korean BB Glow',
                'description' => 'A Korean BB glow treatment for smooth, radiant skin.',
                'status' => 'available',
                'image' => 'images/korean_bbglow.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Melasma',
                'description' => 'A treatment for melasma and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/melasma.jpeg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Stretchmarks',
                'description' => 'A treatment for stretchmark removal and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/stretchmark.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Under Arm Whitening',
                'description' => 'A treatment for underarm whitening and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/underarm_whitening.png',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'New and Old Scars',
                'description' => 'A treatment for scar removal and skin rejuvenation.',
                'status' => 'available',
                'image' => 'images/scar_removal.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Slimming',
                'description' => 'A slimming treatment for weight loss and body contouring.',
                'status' => 'available',
                'image' => 'images/slimming.jpg',
                'duration' => 60,
                'category_id' => 9
            ],
            [
                'name' => 'Acne Treatment',
                'description' => 'A slimming treatment for weight loss and body contouring.',
                'status' => 'available',
                'image' => 'images/acne_treatment.jpg',
                'duration' => 60,
                'category_id' => 9
            ],

            //Premium Quality

            [
                'name' => 'Natural',
                'description' => 'A natural eyelash extension treatment.',
                'price' => 299,
                'status' => 'available',
                'image' => 'images/Eyelash_Extension.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Mascara',
                'description' => 'A mascara eyelash extension treatment.',
                'price' => 349,
                'status' => 'available',
                'image' => 'images/Eyelash_Extension.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Kylie Jenner (Soft volume)',
                'description' => 'A Kylie Jenner-inspired eyelash extension treatment.',
                'price' => 379,
                'status' => 'available',
                'image' => 'images/kylie_jenner.webp',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Russian Volume (Soft volume)',
                'description' => 'A Russian volume eyelash extension treatment.',
                'price' => 379,
                'status' => 'available',
                'image' => 'images/rusian_vol.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Lalisa (Soft hybrid)',
                'description' => 'A Lalisa-inspired eyelash extension treatment.',
                'price' => 400,
                'status' => 'available',
                'image' => 'images/lalisa_eyelash.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Bella porch (Whispy/spikes)',
                'description' => 'A Bella porch-inspired eyelash extension',
                'price' => 480,
                'status' => 'available',
                'image' => 'images/bella_poarch.webp',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Kardashian (full volume)',
                'description' => 'A Kardashian-inspired eyelash extension treatment.',
                'price' => 550,
                'status' => 'available',
                'image' => 'images/kardashian.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Ariana Grande (Hybrid Voum Cat eye)',
                'description' => 'An Ariana Grande-inspired eyelash extension treatment.',
                'price' => 529,
                'status' => 'available',
                'image' => 'images/ariana_grande.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'CardiB. (Full volume)',
                'description' => 'A CardiB-inspired eyelash extension treatment.',
                'price' => 629,
                'status' => 'available',
                'image' => 'images/cardib.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'BEYONCE (Splkes full volume)',
                'description' => 'A Beyonce-inspired eyelash extension treatment.',
                'price' => 729,
                'status' => 'available',
                'image' => 'images/beyonce_eyelash.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'FOX EYE (Trending Lash style)',
                'description' => 'A fox eye-inspired eyelash extension treatment.',
                'price' => 899,
                'status' => 'available',
                'image' => 'images/fox_eye.jpg',
                'duration' => 60,
                'category_id' => 2
            ],
            [
                'name' => 'Korean lash lift',
                'description' => 'A Korean lash lift treatment.',
                'price' => 299,
                'status' => 'available',
                'image' => 'images/korean_lash.png',
                'duration' => 60,
                'category_id' => 2
            ],

        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
