<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('my-channel', function ($user, $id) {
    return 44444;
});
