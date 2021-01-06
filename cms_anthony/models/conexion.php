<?php

class Conexion {

    private static $conexion;

    static public function conectar() {
        if(!isset($conexion)) {
            try {
                self::$conexion = new PDO("mysql:host=" . NOMBRE_SERVIDOR . ";dbname=" . NOMBRE_BD . ";" . USUARIO, PASSWORD);
                self::$conexion -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				self::$conexion -> exec("SET CHARACTER SET utf8");
            } catch (PDOExecption $e) {
                print("Error" $e -> getMessage());
                die();
            }
        }
    }

    static public cerrar_conexion() {
        if(isset($conexion)) {
            return self::$conexion = null;
        }
    }

    static public obtener_conexion() {
        return self::$conexion;
    }
}