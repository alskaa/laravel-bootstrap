@include('partials.head')
@include('layouts.components.header')

<main role="main">
	@yield('page-content')
</main>

@include('layouts.components.footer')
@include('partials.tail')
