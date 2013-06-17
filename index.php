<!DOCTYPE html>
<html>
    <head>
        <title>DOTA2 Items by type</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Language" content="en-US" />
        <link rel="stylesheet" href="css/normalize-2.1.2.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div id="wrapper">
            <div id="content">
                <div id="left">
                    <form>
                        <fieldset>
                            <legend>Select your choices:</legend>
                            <div><label for="consumables">Consumables</label><input id="consumables" type="checkbox" name="consumables" value="consumables" /></div>
                            <div><label for="teleport">Teleport</label><input id="teleport" type="checkbox" name="teleport" value="teleport" /></div>
                            <div><label for="invisibility">Invisibility</label><input id="invisibility" type="checkbox" name="invisibility" value="invisibility" /></div>
                            <div><label for="true_sight">True Sight</label><input id="true_sight" type="checkbox" name="true_sight" value="true_sight" /></div>
                            <div><label for="move_speed">Movement Speed</label><input id="move_speed" type="checkbox" name="move_speed" value="move_speed" /></div>
                            <div><label for="enemy_move_speed_reduction">Enemy Movement Speed Reduction</label><input id="enemy_move_speed_reduction" type="checkbox" name="enemy_move_speed_reduction" value="enemy_move_speed_reduction" /></div>
                            <div><label for="strength">Strength</label><input id="strength" type="checkbox" name="strength" value="strength" /></div>
                            <div><label for="agility">Agility</label><input id="agility" type="checkbox" name="agility" value="agility" /></div>
                            <div><label for="intelligence">Intelligence</label><input id="intelligence" type="checkbox" name="intelligence" value="intelligence" /></div>
                            <div><label for="damage">Damage</label><input id="damage" type="checkbox" name="damage" value="damage" /></div>
                            <div><label for="pure_damage">Pure Damage</label><input id="pure_damage" type="checkbox" name="pure_damage" value="pure_damage" /></div>
                            <div><label for="critical_damage">Critical Damage</label><input id="critical_damage" type="checkbox" name="critical_damage" value="critical_damage" /></div>
                            <div><label for="damage_amplification">Damage Amplification</label><input id="damage_amplification" type="checkbox" name="damage_amplification" value="damage_amplification" /></div>
                            <div><label for="magic_damage_amplification">Magic Damage Amplification</label><input id="magic_damage_amplification" type="checkbox" name="magic_damage_amplification" value="magic_damage_amplification" /></div>
                            <div><label for="damage_block">Damage Block</label><input id="damage_block" type="checkbox" name="damage_block" value="damage_block" /></div>
                            <div><label for="magic_damage_block">Magic Damage Block</label><input id="magic_damage_block" type="checkbox" name="magic_damage_block" value="magic_damage_block" /></div>
                            <div><label for="attack_speed">Attack Speed</label><input id="attack_speed" type="checkbox" name="attack_speed" value="attack_speed" /></div>
                            <div><label for="enemy_attack_speed_reduction">Enemy Attack Speed Reduction</label><input id="enemy_attack_speed_reduction" type="checkbox" name="enemy_attack_speed_reduction" value="enemy_attack_speed_reduction" /></div>
                            <div><label for="lifesteal">Lifesteal</label><input id="lifesteal" type="checkbox" name="lifesteal" value="lifesteal" /></div>
                            <div><label for="health">Health</label><input id="health" type="checkbox" name="health" value="health" /></div>
                            <div><label for="health_regen">Health Regen</label><input id="health_regen" type="checkbox" name="health_regen" value="health_regen" /></div>
                            <div><label for="mana">Mana</label><input id="mana" type="checkbox" name="mana" value="mana" /></div>
                            <div><label for="mana_regen">Mana Regen</label><input id="mana_regen" type="checkbox" name="mana_regen" value="mana_regen" /></div>
                            <div><label for="armor">Armor</label><input id="armor" type="checkbox" name="armor" value="armor" /></div>
                            <div><label for="enemy_armor_reduction">Enemy Armor Reduction</label><input id="enemy_armor_reduction" type="checkbox" name="enemy_armor_reduction" value="enemy_armor_reduction" /></div>
                            <div><label for="magic_resist">Magic Resistance</label><input id="magic_resist" type="checkbox" name="magic_resist" value="magic_resist" /></div>
                            <div><label for="magic_immune">Magic Immunity</label><input id="magic_immune" type="checkbox" name="magic_immune" value="magic_immune" /></div>
                            <div><label for="ministun">Mini-Stun</label><input id="ministun" type="checkbox" name="ministun" value="ministun" /></div>
                            <div><label for="stun">Stun</label><input id="stun" type="checkbox" name="stun" value="stun" /></div>
                            <div><label for="silence">Silence</label><input id="silence" type="checkbox" name="silence" value="silence" /></div>
                            <div><label for="evasion">Evasion</label><input id="evasion" type="checkbox" name="evasion" value="evasion" /></div>
                            <div><label for="displacement">Displacement</label><input id="displacement" type="checkbox" name="displacement" value="displacement" /></div>
                            <div><label for="summon">Summon</label><input id="summon" type="checkbox" name="summon" value="summon" /></div>
                            <div><label for="invulnerable">Invulnerable</label><input id="invulnerable" type="checkbox" name="invulnerable" value="invulnerable" /></div>
                            <div><label for="cooldown_reset">Cooldown Reset</label><input id="cooldown_reset" type="checkbox" name="cooldown_reset" value="cooldown_reset" /></div>
                        </fieldset>
                    </form>
                </div>
                <div id="items">
                    <?php
                    $item_names = array(
                        "Tango" => "tango consumables health_regen",
                        "Clarity" => "clarity consumables mana_regen",
                        "Healing Salve" => "healing_salve consumables health_regen",
                        "Smoke Of Deceit" => "smoke_of_deceit consumables invisibility",
                        "Town Portal Scroll" => "town_portal_scroll consumables teleport",
                        "Dust of Appearance" => "dust_of_appearance consumables true_sight",
                        "Animal Courier" => "animal_courier consumables",
                        "Flying Courier" => "flying_courier consumables",
                        "Observer Ward" => "observer_ward consumables",
                        "Sentry Ward" => "sentry_ward consumables true_sight",
                        "Bottle" => "bottle consumables health_regen mana_regen",
                        "Iron Branch" => "iron_branch strength agility intelligence",
                        "Gauntlets of Strength" => "gauntlets_of_strength strength",
                        "Slippers of Agility" => "slippers_of_agility agility",
                        "Mantle of Intelligence" => "mantle_of_intelligence intelligence",
                        "Circlet" => "circlet strength agility intelligence",
                        "Belt of Strength" => "belt_of_strength strength",
                        "Band of Elvenskin" => "band_of_elvenskin agility",
                        "Robe of the Magi" => "robe_of_the_magi intelligence",
                        "Ultimate Orb" => "ultimate_orb strength agility intelligence",
                        "Ogre Club" => "ogre_club strength",
                        "Blade of Alacrity" => "blade_of_alacrity agility",
                        "Staff of Wizardry" => "staff_of_wizardry intelligence",
                        "Ring of Protection" => "ring_of_protection armor",
                        "Quelling Blade" => "quelling_blade damage",
                        "Stout Shield" => "stout_shield damage_block",
                        "Blades of Attack" => "blades_of_attack damage",
                        "Chainmail " => "chainmail armor",
                        "Quarterstaff " => "quarterstaff attack_speed",
                        "Helm of Iron Will" => "helm_of_iron_will armor health_regen",
                        "Broadsword " => "broadsword damage",
                        "Claymore " => "claymore damage",
                        "Platemail " => "platemail armor",
                        "Javelin " => "javelin damage",
                        "Mithril Hammer" => "mithril_hammer damage",
                        "Magic Stick" => "magic_stick health_regen mana_regen",
                        "Sage&#39;s Mask" => "sages_mask mana_regen",
                        "Ring of Regen" => "ring_of_regen health_regen",
                        "Boots of Speed" => "boots_of_speed move_speed",
                        "Gloves of Haste" => "gloves_of_haste attack_speed",
                        "Cloack" => "cloack magic_resist",
                        "Gem of True Sight" => "gem_of_true_sight true_sight",
                        "Morbid Mask" => "morbid_mask lifesteal",
                        "Ghost Scepter" => "ghost_scepter strength agility intelligence",
                        "Shadow Amulet" => "shadow_amulet invisibility attack_speed",
                        "Talisman of Evasion" => "talisman_of_evasion evasion",
                        "Blink Dagger" => "blink_dagger displacement",
                        "Null Talisman" => "null_talisman strength agility intelligence damage",
                        "Wraith Band" => "wraith_band strength agility intelligence damage",
                        "Magic Wand" => "magic_wand strength agility intelligence health_regen mana_regen",
                        "Bracer" => "bracer strength agility intelligence damage",
                        "Poor Man&#39;s Shield" => "poor_mans_shield agility damage_block",
                        "Soul Ring" => "soul_ring health_regen mana_regen",
                        "Phase Boots" => "phase_boots damage move_speed",
                        "Power Treads" => "power_treads move_speed attack_speed strength agility intelligence",
                        "Oblivion Staff" => "oblivion_staff intelligence mana_regen damage attack_speed",
                        "Perseverance" => "perseverance health_regen mana_regen damage",
                        "Hand of Midas" => "hand_of_midas attack_speed",
                        "Boots of Travel" => "boots_of_travel teleport move_speed",
                        "Ring of Basilius" => "ring_of_basilius damage armor mana_regen",
                        "Headdress" => "headdress strength agility intelligence health_regen",
                        "Buckler" => "buckler strength agility intelligence armor",
                        "Urn of Shadows" => "urn_of_shadows strength mana_regen health_regen",
                        "Tranquil Boots" => "tranquil_boots move_speed armor health_regen",
                        "Ring of Aquila" => "ring_of_aquila damage armor mana_regen strength agility intelligence",
                        "Medallion of Courage" => "medallion_of_courage mana_regen armor enemy_armor_reduction",
                        "Arcane Boots" => "arcane_boots move_speed mana mana_regen",
                        "Drum of Endurance" => "drum_of_endurance strength agility intelligence damage attack_speed move_speed",
                        "Vladimir&#39;s Offering" => "vladimirs_offering health_regen lifesteal damage armor mana_regen",
                        "Mekansm" => "mekansm strength agility intelligence health_regen armor",
                        "Pipe of Insight" => "pipe_of_insight health_regen magic_resist magic_damage_block",
                        "Force Staff" => "force_staff displacement intelligence health_regen",
                        "Veil of Discord" => "veil_of_discord intelligence health_regen armor magic_damage_amplification",
                        "Eul&#39;s Scepter of Divinity" => "euls_scepter_of_divinity intelligence mana_regen move_speed invulnerable",
                        "Necronomicon" => "necronomicon strength intelligence summon",
                        "Dagon" => "dagon strength agility intelligence damage",
                        "Rod of Atos" => "rod_of_atos intelligence health enemy_move_speed_reduction",
                        "Orchid Malevolence" => "orchid_malevolence intelligence mana_regen damage attack_speed silence damage_amplification silence",
                        "Aghanim&#39;s Scepter" => "aghanims_scepter strength agility intelligence health mana",
                        "Refresher Orb" => "refresher_orb intelligence health_regen mana_regen damage cooldown_reset",
                        "Scythe of Vyse" => "scythe_of_vyse strength agility intelligence mana_regen",
                        "Crystalys" => "crystalys damage critical_damage",
                        "Armlet of Mordiggian" => "armlet_of_mordiggian health_regen damage armor attack_speed strength",
                        "Skull Basher" => "skull_basher strength damage stun",
                        "Shadow Blade" => "shadow_blade damage attack_speed invisibility",
                        "Battle Fury" => "battle_fury health_regen mana_regen damage",
                        "Ethereal Blade" => "ethereal_blade strength agility intelligence",
                        "Radiance" => "radiance damage",
                        "Monkey King Bar" => "monkey_king_bar damage attack_speed ministun",
                        "Daedalus" => "daedalus damage critical_damage",
                        "Butterfly" => "butterfly agility damage evasion attack_speed",
                        "Divine Rapier" => "divine_rapier damage",
                        "Abyssal Blade" => "abyssal_blade strength damage stun",
                        "Hood of Defiance" => "hood_of_defiance health_regen magic_resist",
                        "Blade Mail" => "blade_mail intelligence damage armor pure_damage",
                        "Vanguard" => "vanguard health health_regen damage_block",
                        "Soul Booster" => "soul_booster health mana health_regen mana_regen",
                        "Black King Bar" => "black_king_bar strength damage magic_immune",
                        "Shiva&#39;s Guard" => "shivas_guard intelligence armor enemy_attack_speed_reduction",
                        "Manta Style" => "manta_style strength agility intelligence attack_speed move_speed",
                        "Bloodstone" => "bloodstone health mana health_regen mana_regen",
                        "Linken&#39s Sphere" => "linkens_sphere strength agility intelligence health_regen mana_regen damage",
                        "Assault Cuirass" => "assault_cuirass armor attack_speed enemy_armor_reduction",
                        "Heart of Tarrasque" => "heart_of_tarrasque strength health health_regen",
                        "Helm of the Dominator" => "helm_of_the_dominator damage armor lifesteal",
                        "Mask of Madness" => "mask_of_madness lifesteal attack_speed move_speed",
                        "Sange" => "sange strength damage enemy_attack_speed_reduction enemy_move_speed_reduction",
                        "Yasha" => "yasha agility attack_speed move_speed",
                        "Maelstrom" => "maelstrom damage attack_speed",
                        "Diffusal Blade" => "diffusal_blade agility intelligence",
                        "Heaven&#39;s Halberd" => "heavens_halberd strength damage evasion enemy_attack_speed_reduction enemy_move_speed_reduction",
                        "Sange and Yasha" => "sange_and_yasha strength agility damage attack_speed move_speed enemy_attack_speed_reduction enemy_move_speed_reduction",
                        "Desolator" => "desolator damage enemy_armor_reduction",
                        "Mjollnir" => "mjollnir damage attack_speed",
                        "Eye of Skadi" => "eye_of_skadi strength agility intelligence health mana enemy_attack_speed_reduction enemy_move_speed_reduction",
                        "Satanic" => "satanic strength damage armor lifesteal",
                        "Orb of Venom" => "orb_of_venom enemy_move_speed_reduction",
                        "Ring of Health" => "ring_of_health health_regen",
                        "Void Stone" => "void_stone mana_regen",
                        "Energy Booster" => "energy_booster mana",
                        "Vitality Booster" => "vitality_booster health",
                        "Point Booster" => "point_booster health mana",
                        "Hyperstone" => "hyperstone attack_speed",
                        "Demon Edge" => "demon_edge damage",
                        "Mystic Staff" => "mystic_staff intelligence",
                        "Reaver" => "reaver strength",
                        "Eaglesong" => "eaglesong agility",
                        "Sacred Relic" => "sacred_relic damage"
                        );
                    
                    natsort($item_names);
                    
                    foreach($item_names as $name => $class){
                        $result = "<figure class='item' id='$name'>
                            <img class='image $class' width='51' height='38' />
                            <figcaption class='description'>
                                $name
                            </figcaption>
                        </figure>";
                        echo $result;
                    }   
                    ?>
                </div>
                <div id='detail'>
                    
                </div>
            </div>
        </div>
    </body>
</html>
