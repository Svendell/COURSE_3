using Aircompany.Models;

namespace Aircompany.Planes
{
    public class MilitaryPlane : Plane
    {
        private MilitaryType _type;

        public MilitaryPlane(string model, int maxSpeed, int maxFlightDistance, int maxLoadCapacity, MilitaryType type)
            : base(model, maxSpeed, maxFlightDistance, maxLoadCapacity)
        {
            _type = type;
        }

        //Уберите ненужное приведение типа в методе Equals и используйте сравнение с null:
        public override bool Equals(object obj)
        {
            if (obj is MilitaryPlane plane)
            {
                return base.Equals(obj) && _type == plane._type;
            }
            return false;
        }

        //Измените метод PlaneTypeIs
        public MilitaryType PlaneTypeIs
        {
            get { return _type; }
        }

        //Метод ToString можно улучшить, используя интерполяцию строк:
        public override string ToString()
        {
            return $"{base.ToString()}, type={_type}";
        }
    }
}