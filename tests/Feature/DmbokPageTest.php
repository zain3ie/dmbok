<?php

use Inertia\Testing\AssertableInertia as Assert;

test('the dmbok learning page renders the dmbok component', function () {
    $response = $this->get(route('dmbok'));

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Dmbok'));
});
