<?php

require_once "models/config.php";
require_once "models/conexion.php";

$conexion = Conexion::conectar();


print_r($conexion -> obtener_conexion());

$conexion -> cerrar_conexion();