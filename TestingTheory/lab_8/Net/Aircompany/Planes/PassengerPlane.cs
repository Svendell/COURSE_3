using System;

namespace Aircompany.Planes
{
    public class PassengerPlane : Plane
    {
        //* Поле _passengersCapacity было изменено на private int _passengersCapacity
        //и добавлено свойство PassengersCapacityIs, чтобы обеспечить доступ к нему.

        private int _passengersCapacity;

        public PassengerPlane(string model, int maxSpeed, int maxFlightDistance, int maxLoadCapacity, int passengersCapacity)
            : base(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
        {
            this._passengersCapacity = passengersCapacity;
        }

        //В методе Equals было убрано ненужное приведение типа, и используется сравнение с null.
        public override bool Equals(object obj)
        {
            if (obj is PassengerPlane plane)
            {
                return base.Equals(obj) && _passengersCapacity == plane._passengersCapacity;
            }
            return false;
        }


        public int PassengersCapacityIs
        {
            get { return _passengersCapacity; }
        }

        //Использована интерполяция строк в методе ToString, чтобы сделать его более читаемым и компактным.
        //интерполяция вставка переменных без конкатенации через +
        public override string ToString()
        {
            return $"{base.ToString()}, passengersCapacity={_passengersCapacity}";
        }

    }
}
