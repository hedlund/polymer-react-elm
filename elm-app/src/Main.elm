module Main exposing (..)

import Html exposing (Html, Attribute, text, div, h1, img, node)
import Html.Attributes exposing (attribute, src)
import Html.Events exposing (on)
import Json.Decode as Json

---- WRAPPER ----

detailName : Json.Decoder String
detailName =
    Json.at [ "detail", "name" ] Json.string

onChangeTheName : (String -> msg) -> Attribute msg
onChangeTheName msg =
    on "changeTheName" (Json.map msg detailName)

myElement : List (Attribute msg) -> List (Html msg) -> Html msg
myElement attributes children =
    node "my-element" attributes children

---- MODEL ----


type alias Model =
    { name: String }


init : ( Model, Cmd Msg )
init =
    ( { name = "Elm" }, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp
    | ChangeTheName String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
        ChangeTheName newName ->
            ( { model | name=newName }, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!" ]
        , myElement [ attribute "name" model.name, onChangeTheName ChangeTheName ] []
        ]



---- PROGRAM ----


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        }
