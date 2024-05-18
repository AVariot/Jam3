#!/bin/bash
 
wait_for_db() {
    host="$1"
    port="$2"
    timeout="$3"
 
    while ! nc -z "$host" "$port"; do
        echo "Attente de la base de données sur $host:$port..."
        sleep 1
        timeout=$((timeout - 1))
 
        if [ "$timeout" -le 0 ]; then
            echo "La base de données n'est pas accessible après le délai d'attente."
            exit 1
        fi
    done
}
 
wait_for_db "db" "3306" "30"
 
exec "$@"