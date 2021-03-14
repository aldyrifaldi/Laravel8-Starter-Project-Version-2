@extends('layouts.landing',['title' => 'Register'])

@section('content')
<div class="container">
    <div class="row justify-content-center align-items-center" style="height: 90vh">
        <div class="col-md-8 align-self-center">
            <form action="{{route('login')}}" method="POST">
                @csrf
                <div class="card">
                    <div class="card-header bg-primary">
                        <h3 class="card-title align-self-center text-center font-weight-bold text-white">Sign In</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" value="{{old('email')}}" name="email" id="email" class="form-control @error('email') is-invalid @enderror" placeholder="" aria-describedby="helpId">
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" value="{{old('password')}}" name="password" id="password" class="form-control @error('password') is-invalid @enderror" placeholder="" aria-describedby="helpId">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-primary">Sign In</button>
                        <p class="mt-2">Haven't an account? <a href="{{url('register')}}">Sign Up</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
